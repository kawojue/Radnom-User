/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/*.{html, js}'],
  theme: {
    extend: {
      colors: {
        bg: {
          "clr-0": "#2C2E31",
          "clr-1": "#F1F5F8",
          "clr-2": "#49A6E9",
          "clr-3": "#063251",
          "clr-4": "#F1F5F813",
        },
        txt: {
          "clr-0": "rgb(16, 42, 66)",
          "clr-1": "rgb(97, 125, 152)",
          "clr-2": "rgb(73, 166, 233)",
        }
      },
      fontFamily: {
        poppins: ["Poppins", "san-serif"]
      },
      screens: {
        sm: "600px",
        md: "800px",
      }
    },
  },
  plugins: [],
}