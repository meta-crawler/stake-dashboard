/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        user: {
          100: "#b0bad4",
          200: "#2c4450",
          300: "#172937",
          400: "#031523",
          500: "#0b1d2b",
          600: "#b0bad4",
        },
      },
    },
  },
  plugins: [],
};
