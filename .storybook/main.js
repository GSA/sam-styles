const path = require("path");

module.exports = {
  stories: ["../sam-styles/packages/**/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html",
  ],

  staticDirs: ['../sam-styles/packages/images'],

  framework: {
    name: "@storybook/html-webpack5",
    options: {}
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
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: (loaderContext) => {
                return {
                  plugins: [
                    ["postcss-import", { root: loaderContext.resourcePath }],
                    //["postcss-discard-comments", { removeAll: true }],
                    "postcss-preset-env",
                    //[
                    //  "postcss-csso",
                    //  { forceMediaMerge: false, comments: false },
                    //],
                  ],
                };
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: [
                  "./sam-styles/packages",
                  "./node_modules/@uswds/uswds/packages",
                  "./node_modules/@uswds"
                ],
                implementation: require("sass-embedded")
              },
            },
          },
        ],
        include: path.resolve(__dirname, "../sam-styles/index.scss"),
      },
    );
    return config;
  }
};