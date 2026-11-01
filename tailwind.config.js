/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        board: {
          light: '#f0d9b5',
          dark: '#b58863',
          greenLight: '#eeeed2',
          greenDark: '#769656',
          blueLight: '#dee3e6',
          blueDark: '#8ca2ad',
          darkLight: '#4a4f56',
          darkDark: '#2a2d32'
        }
      }
    },
  },
  plugins: [],
}
