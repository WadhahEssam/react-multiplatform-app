const path = require('path');
const baseConfig = require('./webpack.config.base');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge.merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "../../builds/production"),
    filename: "bundle.js",
    chunkFilename: "[id].js",
    publicPath: "",
  },
});