# AGENTS.md

## What this repo is

`@gsa-sam/sam-styles` — a SASS/CSS component library for SAM.gov, documented via a **Storybook** site (Storybook 7, `@storybook/html`). There is **no application runtime and no test suite**; the deliverable is the compiled styles plus the Storybook docs deployed to GitHub Pages.

## Node version

- Pinned to **Node 24** (active LTS). `.nvmrc` is the canonical version; `.github/workflows/build.yml` (`node-version: '24.x'`) must be kept in sync with it. Use `fnm use` / `nvm use` to match `.nvmrc`.

## Developer commands

- `npm i` — install
- `npm start` / `npm run storybook` — dev server on port 6006
- `npm run build:storybook` — build static site to `_site/` (the real CI verification step)
- `npm test` — **not implemented** (`exit 1`); there is no test suite. Do not treat a failing `npm test` as a regression.

Build gotcha: the Storybook build needs extra heap. CI sets `NODE_OPTIONS="--max_old_space_size=8192"`; use the same locally if `build:storybook` OOMs.

The build emits many `@storybook/components` "export not found" WARNings and webpack asset-size warnings. These are pre-existing Storybook 7 internal-API deprecations, **not** failures — a successful build exits 0 and writes `_site/index.html`.

## CI

- CI runs on **GitHub Actions only** (`.github/workflows/`). There is no CircleCI.
- `build.yml` is a reusable workflow (`workflow_call`) that builds Storybook; `build-and-deploy-storybook.yml` (push to `master`) and `pr-workflow.yml` (PR preview) both call it. Node version lives only in `build.yml` — the callers don't pin Node.

## Source layout

- `sam-styles/index.scss` + `sam-styles/packages/` — the SCSS component sources (the library itself)
- `stories/` — Storybook stories
- `.storybook/` — Storybook config (`main.js`, `preview.js`)
- `assets/`, `public/` — static assets

## Conventions

- **SCSS/CSS**: follow `BESTPRACTICES.md` — BEM naming (no camelCase), no inline styles, no IDs for styling, max 3 nesting levels, prefer `@include`/`@mixin` over `@extend`, avoid `!important`. Built on [USWDS](https://designsystem.digital.gov/) (`@uswds/uswds`).
- **PR titles** (per `CONTRIBUTING.md`): `<scope>: <subject>` where scope is the component name, subject is imperative present tense, lowercase, no trailing period (e.g. `button: add small size variant`). PRs also carry one label: `build`, `docs`, `feat`, `fix`, `perf`, `refactor`, or `style`.
- Base branches off `master`.
