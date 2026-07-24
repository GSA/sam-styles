# SAM Styles

`@gsa-sam/sam-styles` is a SASS/CSS component library for SAM.gov, built on [USWDS](https://designsystem.digital.gov/).

## Install

```sh
npm install --save @gsa-sam/sam-styles
```

The package ships uncompiled SCSS. `@use` the entry point from your project's Sass (USWDS must be on your Sass load path — the entry point `@forward`s it):

```scss
@use "@gsa-sam/sam-styles";
```

See [docs/02-for-developers/01-installation.md](docs/02-for-developers/01-installation.md) for full setup.

## Storybook

We use [Storybook](https://storybook.js.org/) to generate an interactive component library for sam-styles. After `npm install`, run it locally with:

```sh
npm start
```

To build the static Storybook site (as CI does):

```sh
npm run build:storybook
```

To run the Storybook smoke-style regression tests locally:

```sh
npx playwright install chromium
npm run test:storybook
```

The smoke tests build Storybook, serve the static `_site/` output, and verify expected computed styles against rendered stories.
