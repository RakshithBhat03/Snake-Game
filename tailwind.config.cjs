/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        kimberly: {
          50: "#f6f6f9",
          100: "#ececf2",
          200: "#d4d4e3",
          300: "#aeafcb",
          400: "#8081ac",
          500: "#636494",
          600: "#4e4e7b",
          700: "#414064",
          800: "#393854",
          900: "#333248",
        },
      },
    },
  },
  plugins: [],
};
