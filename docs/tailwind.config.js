const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
      },
    },
  },
  variants: {},
  plugins: [require('../src/index.js')],
}
