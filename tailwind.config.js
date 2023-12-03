/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueButton: "#8247ff",
        textColor: "#fe8162",
        backgroundBlack: "#1c1c1c",
        cardColor: "#212121",
        backgroundSkin: "#fdf2ec",
        descTextColor: "#767575",
        softBlueButton: "#d1befa",
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 40s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(-120%)" },
          "100%": {
            transform: "translateX(calc(0px * 1))",
          },
        },
      },
    },
  },
  plugins: [],
};
