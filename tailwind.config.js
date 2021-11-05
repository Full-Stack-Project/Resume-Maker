module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
