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
- `npm run compile:check` — compiles `sam-styles/index.scss` via `sass` (all load paths pre-set); writes `coverage/compilation-report.txt`. Exits 0 on success. USWDS deprecation WARNINGs are pre-existing noise, not failures.
- `npm run lint` — alias; same as `npm test`.

Build gotcha: the Storybook build needs extra heap. CI sets `NODE_OPTIONS="--max_old_space_size=8192"`; use the same locally if `build:storybook` OOMs.

The build emits many `@storybook/components` "export not found" WARNings and webpack asset-size warnings. These are pre-existing Storybook 7 internal-API deprecations, **not** failures — a successful build exits 0 and writes `_site/index.html`.

## CI

- CI runs on **GitHub Actions only** (`.github/workflows/`). There is no CircleCI.
- `build.yml` is a reusable workflow (`workflow_call`) that lints and builds Storybook; `build-and-deploy-storybook.yml` (push to `master`) and `pr-workflow.yml` (PR preview) both call it.
- `test.yml` runs `npm test` (stylelint) and `npm run compile:check` (full SCSS compilation) on every PR; uploads a `scss-compilation-report` artifact.
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
