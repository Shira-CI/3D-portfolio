/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#031022",
        secondary: "#defffc",
        hovered: "#73fff2",
        tertiary: "#18212d",
        "black-100": "#100d25",
        "black-200": "#242c35",
        "white-100": "#f3f3f3",
        "white-200":"rgb(246, 255, 242)"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // "hero-pattern": "url('/src/assets/herobg.png')",
        // "hero-pattern": "url('/src/assets/bg1.jpg')",
        // "hero-pattern": "url('/src/assets/bg2.jpg')",
        // "hero-pattern": "url('/src/assets/bg3.jpg')",
        // "hero-pattern": "url('/src/assets/bg4.jpg')",
        "hero-pattern": "url('/src/assets/bg5.jpg')",
      },
    },
  },
  plugins: [],
}