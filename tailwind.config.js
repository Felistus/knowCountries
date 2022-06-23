/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   md: "600px",
    //   // => @media (min-width: 960px) { ... }
    // },
    extend: {
      screens: {
        md: "600px",
      },
    },
  },
  plugins: [],
};
