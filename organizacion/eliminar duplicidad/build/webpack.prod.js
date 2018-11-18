const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const DistPlugins = require('./plugins/dist-plugins');

module.exports = merge(baseConfig, {
  output: {
    filename: 'main.js'
  },

  plugins: DistPlugins({ pageTitle: 'Hello everybody'})
});
