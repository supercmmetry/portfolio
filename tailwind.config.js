module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      pallete: {
        black: '#272727',
        gray: '#747474',
        orange: '#FF652F',
        yellow: '#FFE400',
        green: '#14A76C'
      },
      fill: theme => theme('pallete')
    }
  },
  variants: {
    extend: {
      fill: ['hover', 'focus']
    }
  },
  plugins: []
}
