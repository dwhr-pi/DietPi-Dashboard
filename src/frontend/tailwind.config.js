module.exports = {
  mode: "jit",
  purge: ["src/**/*.svelte"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dplime: {
          DEFAULT: "#9ccc00",
          dark: "#7B952F"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
