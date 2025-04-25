/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'primary': '#FF5F00',
        'primary': '#197BFF',
      },
      fontFamily: {
        'roboto': ['Roboto', 'serif'],
        'openSans': ['Open Sans', 'serif'],

      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode: 'class',
}