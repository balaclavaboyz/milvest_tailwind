module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#86198f",
        secondary: "#f0abfc",
      },
    },
  },
  plugins: [],
};
