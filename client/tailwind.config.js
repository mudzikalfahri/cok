module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["Poppins", "sans-serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        lghtgreen: {
          DEFAULT: "#B3FB9A",
        },
        green: {
          DEFAULT: "#78FF49",
        },
      },
    },
    boxShadow: {
      lg: "0 10px 30px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
