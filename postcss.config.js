// postcss.config.js

const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const postCssImport = require('postcss-import');
const postCssNested = require('postcss-nested');

module.exports = {
  plugins: [
    postCssImport,
    postCssNested,
    tailwindcss,
    autoprefixer,
  ],
};