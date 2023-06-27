/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      gray: '#D3D3D3',
      lightGray: '#F0F0F0',
      darkGray: '#606060',
      blue: '#3E6DD4',
      black: '#000000',
      white: '#ffffff'
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

