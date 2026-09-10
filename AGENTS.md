# AGENTS.md

## What this repo is

`@gsa-sam/sam-styles` — a SASS/CSS component library for SAM.gov, documented via a **Storybook** site (Storybook 7, `@storybook/html`). There is **no application runtime**; the deliverable is the compiled styles plus the Storybook docs deployed to GitHub Pages.

## Node version

- Pinned to **Node 24** (active LTS). `.nvmrc` is the **single source of truth** — all GitHub Actions workflows use `node-version-file: '.nvmrc'`. Use `fnm use` / `nvm use` to match locally. To upgrade Node, update `.nvmrc` only; CI picks it up automatically.

## Developer commands

- `npm i` — install
- `npm start` / `npm run storybook` — dev server on port 6006
- `npm run build:storybook` — build static site to `_site/` (the real CI verification step)
- `npm test` — runs `stylelint` across all SCSS sources; exits 0 on clean lint.
- `npm run test:storybook` — Playwright smoke-style regression tests. Builds Storybook, serves the static `_site/` output via `http-server`, and runs Chromium checks against Storybook iframe URLs (asserting computed styles on rendered stories). Requires the Chromium browser (`npx playwright install chromium`) — Playwright config (`playwright.config.mjs`) and specs (`tests/storybook/*.spec.mjs`) are ESM.
- `npm run compile:check` — compiles `sam-styles/index.scss` via `sass` (all load paths pre-set); writes `coverage/compilation-report.txt`. Exits 0 on success. USWDS deprecation WARNINGs are pre-existing noise, not failures.
- `npm run lint` — alias; same as `npm test`.
- `npm run lint:baseline` — ratcheting stylelint warning-debt gate (`scripts/check-lint-baseline.mjs` + committed `stylelint-baseline.json`). Fails if warnings exceed the baseline or any stylelint error is found; reducing warnings never fails — run `npm run lint:baseline:bump` to lock in a lower baseline as its own commit. This is what the [angular-upgrade-dashboard](https://gsa.github.io/angular-upgrade-dashboard/#metrics) reads for this repo's lint-debt cell, mirroring `sam-ui-elements`' `eslint-baseline.json` pattern (see GSA/sam-styles#823).
- `npm run coverage` — runs `scripts/coverage-report.mjs`; writes `coverage/component-coverage.json` (committed) and `coverage/component-coverage.md` (CI artifact only). Exits 0 if coverage meets the threshold read from the committed `coverage-floor.json` ratchet (currently **90%**), exits 1 otherwise.
- `npm run test:security-workflow` — validates the `Security` workflow contract and the ZAP severity gate (`scripts/check-security-workflow.mjs` + `scripts/check-zap-results.test.mjs`). Exits 0 when the DAST workflow, gate logic, baseline, and docs are consistent. Does **not** run ZAP itself (that needs Docker + a served Storybook; CI provides the end-to-end scan).
- `npm run test:coverage-workflow` — validates the component/story coverage contract (`scripts/check-coverage-workflow.mjs`): `coverage-floor.json` shape, that `coverage/component-coverage.json` is committed (not gitignored), and that `test.yml` guards against a stale committed report and triggers on push to `master`.

## Code coverage

This is a SCSS-only library with no JS runtime. "Coverage" is measured as **component/story coverage**:

> Every Storybook story file (`.stories.js`) in `sam-styles/packages/` should have at least one matching Playwright smoke-test spec in `tests/storybook/`.

- **Metric**: `(stories with a Playwright spec) / (total stories) × 100`
- **Current threshold**: 90%, read from the committed `coverage-floor.json` ratchet at the repo root (`{ "lines": 90 }`) — CI fails if coverage drops below this. `--threshold=<n>` and `COVERAGE_THRESHOLD` still work as explicit overrides for local one-off runs, but `package.json`'s `coverage` script relies on the floor file so there's a single source of truth.
- **Target**: 80–90% — **met**; all Storybook stories currently have a matching Playwright spec (100%). The threshold is held at 90% to leave slack for new stories landing ahead of their specs.
- **Reports**: `coverage/component-coverage.json` is **committed** (its `lines` key is the single percentage a cross-repo quality dashboard reads — see [GSA/sam-styles#822](https://github.com/GSA/sam-styles/issues/822)); `coverage/component-coverage.md` stays a CI artifact / PR comment only, not committed.
- CI (`test.yml`) fails the build if the committed `coverage/component-coverage.json` doesn't match a freshly regenerated report, so the committed snapshot can't silently go stale.
- **To raise the threshold**: edit `coverage-floor.json`'s `lines` value once enough new specs have landed to genuinely raise it. It should only ever go up.

Build gotcha: the Storybook build needs extra heap. CI sets `NODE_OPTIONS="--max_old_space_size=8192"`; use the same locally if `build:storybook` OOMs.

The build emits many `@storybook/components` "export not found" WARNings and webpack asset-size warnings. These are pre-existing Storybook 7 internal-API deprecations, **not** failures — a successful build exits 0 and writes `_site/index.html`.

## CI

- CI runs on **GitHub Actions only** (`.github/workflows/`). There is no CircleCI.
- `build.yml` is a reusable workflow (`workflow_call`) that lints and builds Storybook; `build-and-deploy-storybook.yml` (push to `master`) and `pr-workflow.yml` (PR preview) both call it.
- `test.yml` runs `npm test` (stylelint), `npm run lint:baseline` (stylelint warning-debt ratchet) plus `node scripts/check-lint-baseline.test.mjs` (unit tests for the gate script itself), `npm run compile:check` (full SCSS compilation), `npm run test:security-workflow` (security workflow + ZAP gate contract), and `npm run test:storybook` (Playwright smoke-style regression tests, after `npx playwright install --with-deps chromium`) on every PR; uploads a `scss-compilation-report` artifact.
- `security.yml` runs **DAST** only: it builds and serves Storybook, scans it with OWASP ZAP (`zaproxy/action-baseline`), and fails on new medium/high findings via `scripts/check-zap-results.mjs`; triaged pre-existing findings live in `.zap/baseline.json`. **SAST is CodeQL default setup** (managed in repo Settings, not a workflow file) — do **not** add a committed CodeQL workflow, as advanced + default setup conflict and fail at startup. See `docs/security-scanning.md`.
- All workflows read the Node version from `.nvmrc` via `node-version-file: '.nvmrc'` — do **not** hardcode a version in workflow files.

## Source layout

- `sam-styles/index.scss` + `sam-styles/packages/` — the SCSS component sources (the library itself)
- `stories/` — Storybook stories
- `.storybook/` — Storybook config (`main.js`, `preview.js`)
- `assets/`, `public/` — static assets

## Conventions

- **SCSS/CSS**: follow `BESTPRACTICES.md` — BEM naming (no camelCase), no inline styles, no IDs for styling, max 3 nesting levels, prefer `@include`/`@mixin` over `@extend`, avoid `!important`. Built on [USWDS](https://designsystem.digital.gov/) (`@uswds/uswds`).
- **PR titles** (per `CONTRIBUTING.md`): `<scope>: <subject>` where scope is the component name, subject is imperative present tense, lowercase, no trailing period (e.g. `button: add small size variant`). PRs also carry one label: `build`, `docs`, `feat`, `fix`, `perf`, `refactor`, or `style`.
- Base branches off `master`.
