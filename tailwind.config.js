module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#121212',
        foreground: '#EEFBFB',
        disabled: '#203647',
        hover: '#04D9FF',
        normal: '#007CC7'
      },
      fill: theme => theme('colors'),
      fontFamily: {
        workSans: ['WorkSans', 'serif']
      }
    }
  },
  variants: {
    extend: {
      fill: ['hover', 'focus']
    }
  },
  plugins: []
}
