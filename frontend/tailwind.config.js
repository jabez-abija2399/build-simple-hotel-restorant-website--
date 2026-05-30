/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A0522D', // Sienna
        secondary: '#D2B48C', // Tan
        accent: '#8B4513', // SaddleBrown
        text: '#333333',
        background: '#FFF8DC', // Cornsilk
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}