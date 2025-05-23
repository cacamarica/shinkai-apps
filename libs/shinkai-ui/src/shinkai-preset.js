/** @type {import('tailwindcss').Config} */
const tailwindTypography = require('@tailwindcss/typography');
const tailwindAnimate = require('tailwindcss-animate');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '896px',
      },
    },
    extend: {
      fontSize: {
        'em-xs': '0.75em',
        'em-sm': '0.875em',
        'em-base': '1em',
        'em-lg': '1.125em',
        'em-xl': '1.25em',
        'em-2xl': '1.5em',
      },
      height: {
        input: '59px',
      },
      colors: {
        brand: {
          DEFAULT: 'hsla(360, 99%, 69%, 1)',
          500: 'hsla(359, 58%, 58%, 1)',
        },
        official: {
          gray: {
            100: '#f0f0f0',
            200: '#d0d0d0',
            300: '#b0b0b0',
            400: '#8f8f8f',
            500: '#707070',
            600: '#5a5a5a',
            700: '#464648',
            750: '#3c3c3f',
            780: '#313336', //  borders
            800: '#323234',
            850: '#2a2a2d', // dialogs
            900: '#212023', // inputs
            950: '#1a1a1d',
            1000: '#101113',
            1100: '#0c0d0e',
          },
        },
      },
    },
  },
  plugins: [tailwindTypography, tailwindAnimate, plugin],
};
