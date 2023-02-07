export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: "strict",
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
// import "!style-loader!css-loader!sass-loader!../scss/sam-styles/index.scss";
import "../src/index.scss";

