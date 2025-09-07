/** @type {import('tailwindcss').Config} */
export const tailwindColors = {
  transparent: "transparent",
  current: "currentColor",
  primary: "#F3C401",
  white: "#ffffff",
  purple: "#3f3cbb",
  midnight: "#121063",
  metal: "#565584",
  tahiti: "#3ab7bf",
  silver: "#ecebff",
  bermuda: "#78dcca",
  blue: "#0165e1",
  red: "#ff0000",
  "gray-100": "#8b929a36",
  "gray-200": "#3e4151",
  darkText: {
    100: "#f8fbff",
    200: "#dcdedf",
    300: "#cdd1d5",
    400: "#8d8f9a",
    500: "#e7ebf4",
  },

  darkBg: {
    100: "#232937  ",
    200: "#242831",
  },
  darkBtn: {
    100: "#4147ff ",
    200: "#333993 ",
  },
};

module.exports = {
  darkMode: "selector",
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "765px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: tailwindColors,
      container: {
        center: true,
        width: {
          md: "max-w-screen-2xl",
        },
        padding: {
          DEFAULT: "0rem",
          // md: "2rem",
          // lg: "2rem",
          md: "1rem",
          sm: "1rem",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/bgHero.png')",
        "hero-pattern-mobile": "url('/assets/images/bgHeroMobile.png')",
      },
    },
  },
};
