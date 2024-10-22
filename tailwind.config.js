/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#403d39",
        primaryColor: "#ccc5b9",
        primaryLightColor: "#fffcf2",
      },
    },
  },
  plugins: [],
};
