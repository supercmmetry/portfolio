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
        normal: '#007CC7',
        skin: '#EEFBFB1f',
        skinHover: '#04D9FF5f'
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
