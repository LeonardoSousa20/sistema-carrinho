/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: 'Montserrat',
    },
    divideWidth: {
      1: '1px',
    },
    borderWidth: {
      1: '1px',
      DEFAULT: '1px',
    },
  },
  plugins: [],
};
