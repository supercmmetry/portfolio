module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        palleteBlack: '#272727',
        palleteGray: '#747474',
        palleteOrange: '#FF652F',
        palleteYellow: '#FFE400',
        palleteGreen: '#14A76C'
      },
      pallete: {
        black: '#272727',
        gray: '#747474',
        orange: '#FF652F',
        yellow: '#FFE400',
        green: '#14A76C'
      },
      fill: theme => theme('pallete'),
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
