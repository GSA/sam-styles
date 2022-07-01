module.exports = {
  stories: ["../sam-styles/packages/**/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html",
  ],
  staticDirs: ["../src/img"],
  framework: "@storybook/html",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
