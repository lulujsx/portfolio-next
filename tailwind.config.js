/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'pink': '#d14888',
      'lightpink': '#FB9DC6',
      'gray': '#838284'
    },
    fontFamily: {
      press2p: ['var(--font-press2p)'],
      open: ['var(--font-open)'],
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}