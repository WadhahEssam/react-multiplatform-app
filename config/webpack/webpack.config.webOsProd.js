const path = require('path');
const baseConfig = require('./webpack.config.base');
const webpackMerge = require('webpack-merge');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = webpackMerge.merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "../../builds/productionWebOs"),
    filename: "bundle.js",
    chunkFilename: "[id].js",
    publicPath: "",
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./webOs", to: "" }],
    }),
  ],
});