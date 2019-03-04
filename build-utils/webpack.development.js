const FractalWebpackPlugin = require('fractal-webpack-plugin');

module.exports = () => ({
  devtool: 'source-map',
  output: {
    filename: 'js/sam.js'
  },
  module: {
    rules: []
  },
  plugins: [
    new FractalWebpackPlugin({
      mode: 'server',
      sync: true
    })
  ]
});