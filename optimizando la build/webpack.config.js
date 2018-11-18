const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'DllPlugin'
    }),

    new webpack.DllReferencePlugin({
      manifest: require('./dist/vendor-manifest.json')
    })
  ]
};
