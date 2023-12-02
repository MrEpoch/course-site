/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'main-light': "#ff6e29",
        'main-dark': "#d35400",
      }
    },
  },
  plugins: [],
}

