/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        white: '#FCFCFC',
        black: '#232323',
        grey: '#9A9A9A',
        darkGrey: '#3F3F3F',
        lightGrey: '#f3f3f3',
        primary: '#4791FF',
        darkPrimary: '#204D90',
        lightPrimary: '#B8D4FF',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
}
