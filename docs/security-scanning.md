# Security scanning

The `Security` GitHub Actions workflow complements (and does not replace) Dependabot:

- **SAST:** CodeQL scans the JavaScript/TypeScript build toolchain and GitHub Actions workflows on every pull request and push to `master`.
- **DAST:** OWASP ZAP runs a baseline scan against the built Storybook site. `scripts/check-zap-results.mjs` fails for any new medium- or high-severity alert.

## Existing-finding baseline

Accepted pre-existing ZAP findings are recorded in `.zap/baseline.json`. The initial baseline is empty. If rollout discovers an existing medium/high finding, investigate it first. If it cannot be fixed in the rollout, add an entry containing its exact fingerprint and document the owner, rationale, and remediation issue alongside it. Never baseline a finding introduced by the current change.

The fingerprint printed by the gate has this format:

```text
pluginid|alertRef|url|param
```

Low and informational ZAP alerts remain visible in the uploaded `zap-security-report` artifact but do not block builds.

CodeQL uses GitHub's code-scanning baseline to distinguish pull-request findings from existing default-branch findings. Existing alerts must be triaged in the repository's **Security > Code scanning** view rather than dismissed without review.

## Required repository rules

Branch protection is administered outside this repository. A repository administrator or DevSecOps must configure the `master` ruleset to:

1. Require these status checks before merge:
   - `SAST (javascript-typescript)`
   - `SAST (actions)`
   - `DAST (medium/high gate)`
2. Enable the code-scanning merge protection rule for CodeQL and block **high** and **medium** alerts introduced by a pull request.

The workflow alone cannot modify branch protection. After configuring the rules, validate them with a pull request and record the resulting ruleset in the repository administration evidence.

## Dependabot

`.github/dependabot.yml` remains enabled for weekly npm and GitHub Actions dependency updates. Dependency hygiene is separate from SAST and DAST, so all three controls are retained.
