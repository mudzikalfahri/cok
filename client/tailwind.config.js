module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["Montserrat", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        lghtgreen: {
          DEFAULT: "#B3FB9A",
        },
        green: {
          DEFAULT: "#78FF49",
        },
        cusgray: {
          DEFAULT: "#161616",
        },
        lghtgray: {
          DEFAULT: "#252525",
        },
      },
    },
    boxShadow: {
      lg: "0 5px 30px -3px rgba(0, 0, 0, 0.02), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
