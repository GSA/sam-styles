const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FractalWebpackPlugin = require('fractal-webpack-plugin');

module.exports = () => ({
  devtool: 'source-map',
  output: {
    filename: 'js/sam.js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { 
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          { loader: 'css-loader', options: { sourceMap: true } },
          'postcss-loader',
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/sam.css'
    }),
    new FractalWebpackPlugin({
      mode: 'server',
      sync: true
    })
  ]
});