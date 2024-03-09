/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#e7ca71",
        "dark-blue" : "#052639"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      }
    }
  },
  plugins: [],
}

