const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|es/)
  ]
};

// require expression. require('/locales/' + name + '.js')