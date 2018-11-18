const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = pathToFile => path.resolve(__dirname, pathToFile);

module.exports = {
  mode: 'production',

  entry: base('src/app.js'),

  output: {
    path: base('dist'), 
    filename: '[name].[contenthash].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Demo code splitting'
    }),
  ],
};

