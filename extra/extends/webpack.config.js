const path = require('path');

const base = pathToFile => path.resolve(__dirname, pathToFile);

const DemoPlugin = require('./build/plugins/demoPlugin');

module.exports = {
  entry: base('src/app.js'),
  output: {
    path: base('dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new DemoPlugin({ name: 'myAsset.txt' })
  ]
};
