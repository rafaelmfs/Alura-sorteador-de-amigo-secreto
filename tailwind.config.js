/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        'medium': '800px',
        // => @media (min-width: 800px);
      },
      backgroundImage: {
        'logo': "url('../public/imagens/logo.png')",
        'small-logo': "url('../public/imagens/logo-pequeno.png')",
      },
    },
  },
  plugins: [],
};
