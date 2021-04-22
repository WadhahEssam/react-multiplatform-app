const path = require("path");
const WriteFilePlugin = require("write-file-webpack-plugin");
const baseConfig = require("./webpack.config.base");
const webpackMerge = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = webpackMerge.merge(baseConfig, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../../builds/developmentTizen"),
    filename: "bundle.js",
    chunkFilename: "[id].js",
    publicPath: "",
  },
  plugins: [
    new WriteFilePlugin(),
    new CopyPlugin({
      patterns: [{ from: "./tizen", to: "" }],
    }),
  ],
  devServer: {
    port: 3000,
    host: "0.0.0.0",
  },
});
