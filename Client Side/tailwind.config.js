/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#368C72', // Main
        "sec": '#E5DFDF', // Secondary
        "main_d": '#466551', // Main Dark
        "main_l": '#7ECBA1' // Main Light
      }
    },
  },
  plugins: [],
}