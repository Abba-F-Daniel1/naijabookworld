/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'african-gold': '#FFC300',
        'african-red': '#C70039',
        'african-green': '#2ECC71',
        'african-brown': '#8B4513',
      },
    },
  },
  plugins: [],
}

