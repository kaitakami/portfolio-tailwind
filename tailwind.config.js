/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'body': '#17171F',
        'selected-text': '#3a70f7',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#91991A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
