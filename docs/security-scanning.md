# Security scanning

SAST is provided by GitHub's built-in CodeQL **default setup**, which runs automatically on every pull request and push to `master` — no committed workflow is required. The `Security` GitHub Actions workflow adds DAST and complements (and does not replace) Dependabot and CodeQL default setup:

- **SAST:** CodeQL default setup (repository **Settings > Code security > Code scanning**) scans the JavaScript/TypeScript toolchain and GitHub Actions workflows. It is managed by GitHub, not by this workflow. Do **not** add a committed CodeQL workflow here — advanced setup and default setup cannot run simultaneously, and doing so causes the workflow to fail at startup.
- **DAST:** OWASP ZAP runs a baseline scan against the built Storybook site. `scripts/check-zap-results.mjs` fails for any new medium- or high-severity alert.

## Existing-finding baseline

Accepted pre-existing ZAP findings are recorded in `.zap/baseline.json`. The initial baseline is empty. If rollout discovers an existing medium/high finding, investigate it first. If it cannot be fixed in the rollout, add an entry containing its exact fingerprint and document the owner, rationale, and remediation issue alongside it. Never baseline a finding introduced by the current change.

The fingerprint printed by the gate has this format:

```text
pluginid|alertRef|url|param
```

Low and informational ZAP alerts remain visible in the uploaded `zap-security-report` artifact but do not block builds.

## Hardening applied to the built site

The blocking medium-severity findings were fixed in the delivered markup rather than baselined, so the protection reaches real browsers (GitHub Pages hosting cannot set response headers):

- **Content Security Policy** and **X-Content-Type-Options** are injected via `<meta http-equiv>` in `.storybook/preview-head.html` (story iframe) and `.storybook/manager-head.html` (Storybook shell). The CSP includes `frame-ancestors 'self'`, which provides genuine clickjacking protection and satisfies ZAP's anti-clickjacking rule (an `X-Frame-Options` `<meta>` would be ignored by browsers).
- **Subresource Integrity** — the single external stylesheet (`bootstrap-icons` from jsDelivr) carries a pinned `integrity` (sha384) and `crossorigin` attribute in `.storybook/preview-head.html`. If that dependency version is bumped, recompute the hash with `curl -fsSL <url> | openssl dgst -sha384 -binary | openssl base64 -A`.

Several non-blocking (low/informational) WARN findings remain — e.g. `Permissions-Policy` and `Cross-Origin-Embedder-Policy` headers, which cannot be set from static markup. They surface in the `zap-security-report` artifact but do not fail the gate.

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
