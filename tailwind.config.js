/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        black: {
          600: "#2d2d2d",
          900: "#000",
        },
      },
      backgroundImage: {
        backgroundAll: "url('/imgs/background.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
