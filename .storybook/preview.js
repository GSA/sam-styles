export const parameters = {
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: "strict",
    },
    root: "#storybook-root",
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
import "../node_modules/@uswds/uswds/dist/js/uswds.min.js";
import "../sam-styles/index.scss";
