/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Bellefair": ["Bellefair", 'serif'],
        "BarlowCondensed": ["Barlow Condensed", 'sans-serif'],
        "Barlow": ["Barlow", 'sans-serif']
      },
    },
  },
  plugins: [],
}
