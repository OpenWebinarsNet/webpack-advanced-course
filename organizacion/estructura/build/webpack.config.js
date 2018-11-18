const path = require('path');

const base = pathToFile => path.resolve(__dirname, pathToFile);

module.exports = {
  entry: './src/app.js',
  output: {
    path: base('../dist'),
    filename: 'bundle.js'
  }
};
