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
      keyframes: {
        smiley: {
          "0%, 100%": { transform: "translate(0px,-25px)" },
          "50%": { transform: "translate(0px,25px)" },
        },
        smileyreverse: {
          "0%, 100%": { transform: "translate(0px,-25px) rotate(180deg)" },
          "50%": { transform: "translate(0px,25px) rotate(180deg)" },
        },
      },
      animation: {
        smiley: "smiley 2s ease-in-out infinite",
        smileyreverse: "smileyreverse 2s 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
