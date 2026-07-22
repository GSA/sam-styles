# SAM Styles

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
