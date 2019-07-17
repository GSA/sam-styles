const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    "sds.min": [
      path.resolve(__dirname, "src/js/index.js"),
      path.resolve(__dirname, "src/stylesheets/sam.scss")
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    libraryTarget: "umd",
    library: "SDS",
    umdNamedDefine: true,
    auxiliaryComment: {
      root: "Root",
      commonjs: "CommonJS",
      commonjs2: "CommonJS2",
      amd: "AMD"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("autoprefixer")()]
            }
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["node_modules"]
            }
          }
        ]
      },
      {
        test: /\.(svg|png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: (url, resourcePath, context) => {
                const dirNameArr = resourcePath.split("/");
                const imgPathIdx = dirNameArr.indexOf("img");
                const fontPathIdx = dirNameArr.indexOf("fonts");
                if (imgPathIdx !== -1) {
                  return dirNameArr.slice(imgPathIdx).join("/");
                } else if (fontPathIdx !== -1) {
                  return dirNameArr.slice(fontPathIdx).join("/");
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
    new CleanWebpackPlugin(["dist"]),
    new StyleLintPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/icons"),
        to: path.resolve(__dirname, "dist/icons")
      }
    ]),
    new webpack.ProgressPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};
