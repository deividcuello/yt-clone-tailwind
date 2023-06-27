/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  darkMode: 'class',
  theme: {
    colors: {
      gray: '#D3D3D3',
      lightGray: '#F0F0F0',
      darkGray: '#606060',
      darkGray1: '#707070',
      blue: '#3E6DD4',
      black: '#000000',
      black1: '#222222',
      white: '#ffffff',
      red: '#ff0000'
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

