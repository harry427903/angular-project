/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
        colors: {
          primary: "#E6E6E6",
          card1 : "#EB2B36",
          card2 : "#F4BF2D",
          card3: "#2BC96C",
          card4: "#1680F6",
          card5: "#000000",

          secondary : "#6F42CE",
          
          tertiary : "#F44E77",

          header : "#b599f0"
        }
    },
  },
  plugins: [],
}