export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1280px",
      // => @media (min-width: 1440px) { ... }
      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
      xxl: "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
