/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dd7e0d',
        secondary: '#383d45',
        third: '#ffdd59',
        main_bg: '#ffa62474',
      },

    },
  },
  plugins: [],
}