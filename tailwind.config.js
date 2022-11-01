/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ogg: ["ogg", "sans-serif"],
        apercu: ["apercu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
