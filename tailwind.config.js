/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      'white': '#FCFCFC',
      'black': '#232323',
      'gray': '#9A9A9A',
      'darkGray': '#3F3F3F',
      'lightGray': '#E4E4E4',
      'primary': '#4791FF',
      'darkPrimary': '#204D90',
      'lightPrimary': '#B8D4FF',
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
    },
  }
};
export const plugins = [];