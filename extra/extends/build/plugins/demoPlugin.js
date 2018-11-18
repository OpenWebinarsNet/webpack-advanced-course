const { RawSource } = require('webpack-sources');

module.exports = class DemoPlugn {
  constructor (options) {
    this.options = options;
  }

  apply (compiler) {

    compiler.hooks.emit.tapAsync('DemoPlugin', (compilation, cb) => { compilation.assets[this.options.name] = new RawSource('demo');

      cb();
    });
  }
};