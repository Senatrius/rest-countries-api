/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkElement: "hsl(209, 23%, 22%)",
      darkBackground: "hsl(207, 26%, 17%)",
      lightBackground: "hsl(0, 0%, 98%)",
      lightText: "hsl(200, 15%, 8%)",
      white: "hsl(0, 0%, 100%)"
    }
  },
  plugins: [],
}
