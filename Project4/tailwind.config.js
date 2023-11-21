/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {
        maxWidth:{
          primary: "500px",
        },
        fontSize: {
          title: "60px",
        },
        rotate: {
          30: "30deg",
        },
        backgroundImage: {
          img: "url('../src/images/drink.jpg')",
        },
        borderRadius: {
          3.5: "3.5rem",
        },
        backgroundColor: {
          primary: "#f5f5f5",
        },
      },
  },
  plugins: [],
  darkMode: "class",
};