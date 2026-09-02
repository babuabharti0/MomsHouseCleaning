/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Archivo Black"', 'sans-serif'],
        body: ['"Playfair Display"', 'serif'],
        accent: ['"Libre Baskerville"', 'serif'],
      },
    },
  },
  plugins: [],
};
