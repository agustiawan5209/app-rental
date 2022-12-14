/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       
        colors: {
            'default-yellow': '#F1A02F',
            'default-red': '#CF4647',
            'default-dark': '#2A363B',
            'default-white': '#F8F6F6',
        }
    },
},
  plugins: [],
}