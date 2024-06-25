/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#FD6B22",
      },
      backgroundImage: {
        hero: "url('/Hero.jpeg')",
        heroPackage: "url('/packageHero.png')",
      },
    },
  },
  plugins: [],
};
