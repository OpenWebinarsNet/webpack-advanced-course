const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const cssLoaders = require('./loaders/css-loaders');

module.exports = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          ...cssLoaders,
        ]
      }
    ]
  }
});
