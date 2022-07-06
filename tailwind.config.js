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
      medium: "640px",
      "custom-lg": "1128px",
    },
    extend: {},
  },
  plugins: [],
};
