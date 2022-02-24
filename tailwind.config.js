module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#183599",
      orange: "#FBB539",
      dark: "#000929",
      light: "#F5F8FF",
      white: "#FFFFFF",
    },

    fontFamily: {
      futura: "'futura-pt', system-ui, sans-serif",
      londrina: "'Londrina Solid', system-ui, sans-serif",
      londrinaOutline: "'Londrina Outline', system-ui, sans-serif",
    },

    fontSize: {
      h1Desktop: ["144px"],
      h2Desktop: ["39px"],
      bodyDesktop: ["20px"],
      testimonialsDesktop: ["17px", { lineHeight: "25px" }],

      h1Mobile: ["70px"],
      h2Mobile: ["25px"],
      bodyMobile: ["14px"],
      testimonialsMobile: ["14px"],
    },

    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
