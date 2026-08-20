# Security scanning

SAST is provided by GitHub's built-in CodeQL **default setup**, which runs automatically on every pull request and push to `master` — no committed workflow is required. The `Security` GitHub Actions workflow adds DAST and complements (and does not replace) Dependabot and CodeQL default setup:

- **SAST:** CodeQL default setup (repository **Settings > Code security > Code scanning**) scans the JavaScript/TypeScript toolchain and GitHub Actions workflows. It is managed by GitHub, not by this workflow. Do **not** add a committed CodeQL workflow here — advanced setup and default setup cannot run simultaneously, and doing so causes the workflow to fail at startup.
- **DAST:** OWASP ZAP runs a baseline scan against the built Storybook site. `scripts/check-zap-results.mjs` fails for any new medium- or high-severity alert.

## Existing-finding baseline

Accepted pre-existing ZAP findings are recorded in `.zap/baseline.json`. Each entry carries its exact fingerprint plus an `alert`, `reason`, `owner`, and `remediation`. If rollout discovers a new medium/high finding, investigate it first; fix it in the markup if possible, and only baseline it with documented rationale if it cannot be addressed in this hosting/framework combination. Never baseline a finding introduced by genuinely new application code.

The fingerprint printed by the gate has this format:

```text
pluginid|alertRef|url|param
```

Low and informational ZAP alerts remain visible in the uploaded `zap-security-report` artifact but do not block builds.

## Hardening applied to the built site

The blocking medium-severity findings were fixed in the delivered markup where realistically possible, so the protection reaches real browsers (GitHub Pages hosting cannot set response headers). What remains is triaged and baselined with rationale. Note that ZAP scans the built Storybook docs site (`_site/`), which is developer/documentation tooling — the published npm package ships **SCSS only** (see the `files` field in `package.json`), so none of this markup is delivered to consumers of the library.

**Fixed in markup (genuine, ships to browsers):**

- **Content Security Policy** and **X-Content-Type-Options** are injected via `<meta http-equiv>` in `.storybook/preview-head.html` (story iframe) and `.storybook/manager-head.html` (Storybook shell). Only directives valid in a `<meta>` context are included, with explicit `form-action`, `frame-src`, `worker-src`, `child-src`, `manifest-src` and `media-src` so there are no missing fallbacks.
- **Subresource Integrity** — the single external stylesheet (`bootstrap-icons` from jsDelivr) carries a pinned `integrity` (sha384) and `crossorigin` attribute in `.storybook/preview-head.html`. If that dependency version is bumped, recompute the hash with `curl -fsSL <url> | openssl dgst -sha384 -binary | openssl base64 -A`.

**Baselined with rationale (cannot be fixed in this hosting/framework combination, see `.zap/baseline.json`):**

- **Anti-clickjacking** (`10020`) — `X-Frame-Options` / CSP `frame-ancestors` are header-only and ignored via `<meta>`; GitHub Pages cannot set response headers.
- **CSP `unsafe-inline` / `unsafe-eval`** (`10055`) — required by Storybook's webpack runtime; removing them breaks the docs site.
- **CSP meta-invalid / no-fallback residue** (`10055`) — defensively baselined; only header-only directives remain unexpressible via `<meta>`.

Each of these is revisited if the docs site moves to a host that can emit HTTP response headers. The remaining WARN findings (e.g. `Permissions-Policy`, `Cross-Origin-Embedder-Policy`) are low/informational, cannot be set from static markup, and do not fail the gate — they surface in the `zap-security-report` artifact.

CodeQL uses GitHub's code-scanning baseline to distinguish pull-request findings from existing default-branch findings. Existing alerts must be triaged in the repository's **Security > Code scanning** view rather than dismissed without review.

## Required repository rules

Branch protection is administered outside this repository. A repository administrator or DevSecOps must configure the `master` ruleset to:

1. Require these status checks before merge:
   - `Analyze (javascript-typescript)` (CodeQL default setup)
   - `Analyze (actions)` (CodeQL default setup)
   - `DAST (medium/high gate)`
2. Enable the code-scanning merge protection rule for CodeQL and block **high** and **medium** alerts introduced by a pull request.

The workflow alone cannot modify branch protection. After configuring the rules, validate them with a pull request and record the resulting ruleset in the repository administration evidence.

## Dependabot

`.github/dependabot.yml` remains enabled for weekly npm and GitHub Actions dependency updates. Dependency hygiene is separate from SAST and DAST, so all three controls are retained.
