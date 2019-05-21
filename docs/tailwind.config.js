const defaultTheme = require('tailwindcss/defaultTheme')
const svgToDataUri = require('mini-svg-data-uri')

module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('../index.js'),
  ],
}
