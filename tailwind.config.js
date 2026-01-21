/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        adventist: {
          primary: '#1e3a5f',
          secondary: '#2c5282',
          accent: '#c9a227',
          dark: '#0f1f33',
          light: '#f7fafc',
        }
      }
    },
  },
  plugins: [],
}

