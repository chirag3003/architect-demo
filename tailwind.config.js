/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'serif':'var(--font-serif)',
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),],
}
