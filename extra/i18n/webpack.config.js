const path = require('path');
const i18n = require('i18n-webpack-plugin');

const langs = {
  en: require('./en.json'),
  es: require('./es.json')
};

module.exports = Object.keys(langs).map(lang => {
  return {
    name: lang,
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `${lang}.bundle.js`
    },

    plugins: [
      new i18n(langs[lang])
    ]
  }
});
