export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1280px",
        // => @media (min-width: 1440px) { ... }
        xl: "1440px",
        // => @media (min-width: 1440px) { ... }
        xxl: "1920px",
        // => @media (min-width: 1920px) { ... }
      },
      backgroundColor: {
        primary: " #1D1042",
        btn_primary: "#45269C",
        btn_secondary: "#703EFE",
        secondary: "#FCFBFC;",
        input: "#F4F6F8;",
      },
      boxShadow: {
        alt: "0px 0px 100px rgba(0, 0, 0, 0.02)",
      },
      width: {
        68: "272px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
