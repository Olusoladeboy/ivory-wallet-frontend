/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sidebar': "url('/src/assets/sidebar.svg')",
      }
    },
  },
  plugins: [],
}

