const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        green:{
          light:'#a3d175',
          lime:'#84CC16',
          neon: '#11da21'
        },
        teal:colors.teal,
        lime:colors.lime,
      },
      fontFamily: {
        'Sherlock': ["Libre Baskerville", 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
