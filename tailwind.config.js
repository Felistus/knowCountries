/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: "600px",
      "custom-md": "500px",
      lg: "1024px",
    },
    extend: {},
  },
  plugins: [],
};
