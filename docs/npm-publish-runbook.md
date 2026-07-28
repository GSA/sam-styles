# npm Publish Runbook

This document describes the security model and approval flow for publishing
`@gsa-sam/sam-styles` to the public npm registry.

See also: `.github/workflows/publish.yml` for the full workflow source.

---

## Security layers (defence-in-depth)

Three independent guardrails must all be satisfied before a live publish can
reach npm. An attacker would need to defeat all three simultaneously.

| Layer                 | What it guards                                                                                                             | Where it lives                                  |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 1 — CODEOWNERS        | Merge-time: any change to `/.github/` requires `@GSA/sam-shared-frontend-admin` review                                     | `CODEOWNERS`                                    |
| 2 — Branch protection | Merge-time: `master` requires a passing PR review, code-owner approval, and forbids direct pushes                          | GitHub repo Settings → Branches                 |
| 3 — Environment gate  | Run-time: the `release` environment pauses every publish job for a named human approver **before** OIDC mints a credential | GitHub repo Settings → Environments → `release` |

Layers 1 and 2 prevent an unauthorized workflow change from landing on
`master`. Layer 3 catches anything that somehow slips through — even a
legitimately-merged change cannot actually publish until a human explicitly
approves the pending deployment.

---

## How the approval flow works at runtime

1. A GitHub Release is published (or a maintainer triggers `workflow_dispatch`
   with `dry-run: true`).
2. The `quality-gates` and `test` jobs run first (lint, SCSS compile,
   Playwright smoke tests).
3. On success, the `publish` job is queued **but paused** at the
   `environment: release` gate.
4. GitHub sends a notification to the required reviewers configured on the
   `release` environment.
5. A named DevSecOps approver reviews the pending deployment in
   **Actions → the workflow run → Review deployments** and clicks **Approve**.
6. Only after approval does the job continue — at which point GitHub mints a
   short-lived OIDC credential that npm trusts because this repo + workflow
   filename are registered as the package's Trusted Publisher.
7. `npm publish` (or `npm publish --dry-run`) runs with that credential. No
   long-lived token is stored anywhere in the repo or in GitHub Secrets.

If the approver clicks **Reject**, the job is cancelled and nothing is
published.

---

## One-time setup checklist (DevSecOps / repo admin)

These steps must be completed once before the first live publish. Check each
off as done and record the date.

### Layer 2 — Branch protection on `master`

- [ ] **Required status checks** — add the PR quality-gate check runs so a PR
      can't merge until they pass. These are named `{workflow} / {job}`; in
      this repo the relevant ones are `Test / test`, `Build-Storybook / Lint`,
      `Build-Storybook / Format-Check`, and `Build-Storybook / Build-Storybook-Assets`.
      (Note: `quality-gates` is a job in the release-triggered `publish.yml`
      and does **not** appear as a PR status check — don't reference it here.)
- [ ] **Require a pull request before merging** — at least 1 approving review
- [ ] **Require review from Code Owners** — ensures `CODEOWNERS` is enforced
- [ ] **Restrict pushes** — no direct pushes to `master`; only PRs
- [ ] **Do not allow bypassing** — admins also subject to these rules

Location: `https://github.com/GSA/sam-styles/settings/branches`

### Layer 3 — `release` environment

> **Status: already configured.** The `release` environment exists on the
> repo with required reviewers (`@GSA/sam-shared-frontend`) and a deployment
> branch policy restricting it to `master`. The boxes below are checked to
> record that state; re-verify if the environment is ever recreated.

- [x] **Required reviewers** — `@GSA/sam-shared-frontend` is set; at least one
      approval required
- [x] **Deployment branches** — restricted to the `master` branch only
      (prevents the environment from being triggered by a feature branch)
- [ ] **Wait timer** (optional) — add a short wait (e.g. 5 min) as an extra
      speed-bump if desired

Location: `https://github.com/GSA/sam-styles/settings/environments`

### npm Trusted Publisher registration

> **Note (DevSecOps):** the OIDC wiring is more involved here because the
> `@gsa-sam` org publishes with **immutable tokens**. Confirm with the org
> owner how the Trusted Publisher / OIDC exchange interacts with the immutable
> token policy before flipping `DRY_RUN` to `false`.

- [ ] Log in to npmjs.com as the `@gsa-sam` org owner
- [ ] Navigate to the `@gsa-sam/sam-styles` package → **Settings** →
      **Trusted Publishers**
- [ ] Add a GitHub Actions publisher:
  - **Organization**: `GSA`
  - **Repository**: `sam-styles`
  - **Workflow filename**: `publish.yml`
  - **Environment name**: `release`
- [ ] Once registered, flip `DRY_RUN` to `false`:
  - Go to `https://github.com/GSA/sam-styles/settings/variables/actions`
  - Set the `DRY_RUN` repository variable (or environment variable on
    `release`) to `false`
  - Alternatively, edit the default in `publish.yml` — but prefer the
    variable so it can be toggled without a code change

---

## Verifying the gate is active (smoke test)

1. Trigger a manual dry-run: **Actions → Publish to npm → Run workflow** →
   leave `dry-run: true` → **Run workflow**.
2. Watch the run. After `quality-gates` and `test` pass, the `publish` job
   should show **"Waiting for review"** under the `release` environment.
3. Approve it. The job should proceed, run `npm publish --dry-run`, and exit 0.
4. Confirm in the job logs that `npm publish --dry-run` ran (look for
   `npm notice` tarball output and the "dry-run" notice).

If the job does **not** pause for review, the environment gate is misconfigured
— stop and fix before registering the Trusted Publisher.

---

## Related files

- `.github/workflows/publish.yml` — the publish workflow
- `CODEOWNERS` — enforces DevSecOps review on `/.github/` changes
- `docs/npm-publish-runbook.md` — this file
