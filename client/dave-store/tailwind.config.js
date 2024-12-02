/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

// to apply darkmode
darkMode: 'class',

  theme: {
    extend: {
      colors: {
primary: '#f9a044',
secondary: '#ed8900'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm:'3rem'
        }
      }
    },
  },
  plugins: [],
}