const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    // alias, extensions, modules

    alias: {
      config: path.resolve(__dirname, 'src', 'config', 'app', 'index.js'),
    },

    extensions: ['.js', '.json', '.jsx'],

    modules: ['node_modules']
  }
}