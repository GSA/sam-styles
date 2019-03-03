const path = require('path');
const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

const USWDS_DIR = './node_modules/uswds/dist/';
const SRC_DIR = './src/';

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      entry: "./src/js/index.js",
      module: {
        rules: [
          {
            test: /\.(woff(2)?|ttf|eot|svg|png|ico)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  outputPath: (url, resourcePath, context) => {
                    const dirNameArr = resourcePath.split('/');
                    const imgPathIdx = dirNameArr.indexOf('img');
                    const fontPathIdx = dirNameArr.indexOf('fonts');
                    if(imgPathIdx !== -1){
                      return dirNameArr.slice(imgPathIdx).join('/');
                    } else if(fontPathIdx !== -1){
                      return dirNameArr.slice(fontPathIdx).join('/');
                    }
                    return url;
                  }
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new CleanWebpackPlugin(['dist'], { verbose: true }),
        new CopyPlugin([
          { // Get USWDS Fonts
            from: path.resolve(USWDS_DIR, 'fonts'), 
            to: path.resolve(SRC_DIR, 'fonts')
          }, 
          { // Get USWDS Images
            from: path.resolve(USWDS_DIR, 'img'),
            to: path.resolve(SRC_DIR, 'img')
          },
        ]),
        // new HtmlWebpackPlugin(), 
        new webpack.ProgressPlugin(),
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};