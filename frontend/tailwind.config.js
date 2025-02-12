// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {},
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // screens: {
    // xs: { min: "310px", max: "639px" },
    //   // => @media (min-width: 640px and max-width: 767px) { ... }
    //   sm: { min: "540px", max: "767px" },
    //   // => @media (min-width: 640px and max-width: 767px) { ... }

    //   md: { min: "768px", max: "1023px" },
    //   // => @media (min-width: 768px and max-width: 1023px) { ... }

    //   lg: { min: "1024px", max: "1279px" },
    //   // => @media (min-width: 1024px and max-width: 1279px) { ... }

    //   xl: { min: "1280px", max: "1535px" },
    //   // => @media (min-width: 1280px and max-width: 1535px) { ... }

    //   "2xl": { min: "1536px" },
    //   // => @media (min-width: 1536px) { ... }
    // },
    extend: {
      animation: {
        "spin-slow": "spin 90s linear infinite",
      },
      gridTemplateColumns: {
        grades: "40% repeat(2, 25%) 10%",
        gradeRow: "10% 30% 10% 10% 20% 20%",
      },
    },
  },
  variants: {},
  plugins: [],
};
