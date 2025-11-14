/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dm-element': 'hsl(209, 23%, 22%)',
        'dm-bg': 'hsl(207, 26%, 17%)',
        'lm-text': 'hsl(200, 15%, 8%)',
        'lm-input': 'hsl(0, 0%, 52%)',
        'lm-bg': 'hsl(0, 0%, 98%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}