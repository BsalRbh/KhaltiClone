/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        db: "#21112D",
        b: "#601FB5",
        textBlue: "#56338C",
        orange: "RGB(253, 139, 7)",
        darkOrange: "RGB(254, 156, 42)",
      },
    },
  },
  plugins: [],
};
