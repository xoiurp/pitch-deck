/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C4A484', // Cor bege do logo
        secondary: '#4A4A4A', // Cor escura para textos
      },
      fontFamily: {
        'sofia': ['Sofia Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}