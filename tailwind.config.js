module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#183599",
      orange: "#FBB539",
      dark: "#000929",
      light: "#F5F8FF",
    },

    fontFamily: {
      futura: "'futura-pt', system-ui, sans-serif",
      londrina: "'Londrina Solid', system-ui, sans-serif",
      londrinaOutline: "'Londrina Outline', system-ui, sans-serif",
    },

    fonSize: {
      h1Desktop: ["144px"],
    },

    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
