const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  resolve: {
    modules: [
      path.resolve(__dirname, "assets/scripts"),
      path.resolve(__dirname, "assets"),
      "node_modules"
    ],
    extensions: [".js"]
  },
  entry: {
    theme: [
      path.resolve(__dirname, "assets/scripts/theme.js"),
      path.resolve(__dirname, "assets/styles/theme.scss")
    ],
    sds: [
      path.resolve(__dirname, "src/js/index.js"),
      path.resolve(__dirname, "src/stylesheets/sam.scss")
    ],
    sds2: [
      path.resolve(__dirname, "src/js/index.js"),
      path.resolve(__dirname, "src/stylesheets/uswds.scss")
    ],
    icons: path.resolve(__dirname, "src/icons/icons.js")
  },
  output: {
    path: path.resolve(__dirname, "_site"),
    publicPath: "/",
    filename: "[name].js"
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
              publicPath: "./",
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader",
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
              name: "[path][name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(["_site"]), new MiniCssExtractPlugin()],
  devServer: {
    historyApiFallback: true,
    compress: true,
    proxy: {
      "**": "http://localhost:4000"
    },
    port: 3000,
    stats: {
      colors: true
    },
    overlay: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  }
};
