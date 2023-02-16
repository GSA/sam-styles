const path = require("path");

module.exports = {
  stories: ["../src/packages/**/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html",
  ],
  staticDirs: ['../src/packages/images'],
  framework: "@storybook/html",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    
    config.module.rules.push(
      {
        test: /\.s(c|a)ss$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              esModule: false,
            },
          },
          
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: [
                  "./src/packages",
                  "./node_modules/@uswds/uswds/packages",
                  "./node_modules/@uswds"
                ],
                implementation: require("sass-embedded")
              },
            },
          },
        ],
        include: path.resolve(__dirname, "../src/index.scss"),
      },
    );
    return config;
  },
};