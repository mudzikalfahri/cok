const { url } = require("inspector");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",

      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      lg: "0 5px 30px -3px rgba(0, 0, 0, 0.02), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
    },
    extend: {
      backgroundImage: {
        workspace: url("/workspace.png"),
      },
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
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
