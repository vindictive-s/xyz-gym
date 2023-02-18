/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#cac7e4",
        "gray-50": "#cac7e4",
        "gray-100": "#cac7e4",
        "gray-500": "#cecaef",
        "primary-100": "#3c376a",
        "primary-300": "#211c51",
        "primary-500": "#f8f4fd",
        "secondary-400": "#2d2a44",
        "secondary-500": "#211c51",
        "warning-500": "#df4e4e",
      },
      backgroundImage: (theme) => ({
        "gradient-darkred":
          "linear-gradient(90deg, rgb(60, 55, 106) 8.5%, rgb(23, 20, 69) 82.4%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        robotocondensed: ["Roboto Condensed", "sans-serif"],
        exo: ["Exo", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
