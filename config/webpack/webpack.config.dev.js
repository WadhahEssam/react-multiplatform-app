const path = require("path");
const WriteFilePlugin = require("write-file-webpack-plugin");
const baseConfig = require("./webpack.config.base");
const webpackMerge = require("webpack-merge");

module.exports = webpackMerge.merge(baseConfig, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../../builds/developmentServer"),
    filename: "bundle.js",
    chunkFilename: "[id].js",
    publicPath: "",
  },
  plugins: [new WriteFilePlugin()],
  devServer: {
    port: 3000,
    host: '0.0.0.0',
  },
});
