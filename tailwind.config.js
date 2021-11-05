module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0F4EB5",
        secondary: "#D6AD33",
      },
      outline: {
        primary: "#0F4EB5",
      },
      backgroundImage: {
        "hero-image": "url('/src/Images/glaIMG.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
