const path = require('path')

const base = pathToFile => path.resolve(__dirname, pathToFile);

module.exports = {
  entry: base('../src/index.js'),
  output: {
    path: base('../dist'),
    filename: 'bundle.js'
  }
};
