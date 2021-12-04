module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'amazon-bg': 'rgb(234, 237, 237)',
        'yellow-button': '#f0c14b',
        'yellow-border': '#a88734 #9c7e31 #846a29',
        'button-text-black': '#111',
      },
      margin: {
        '-150': '-150px',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-gradient-mask-image")
  ],
}
