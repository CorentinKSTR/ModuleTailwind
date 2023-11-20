/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#1D84E8",
      },
      fontSize: {
        title: "2rem",
        subtitle: "1.5rem",
      },
      fontWeight: {
        title: "bold",
        subtitle: "bold",
      },
      borderRadius: {
        "primary": "10px",
      },
      backgroundImage: {
        "banner": "url('../src/images/banner.jpg')",
      },
      height: {
        "banner": "60vh",
      },
    },
  },
  plugins: [],
}

