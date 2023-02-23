/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // bool or 'media' (system setting) or 'class' (toggle manually)
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        theme: {
          primary: "#A663CC",
          primaryVariant: "#",
          secondary: "#EF7B45",
          secondaryVariant: "#",
          background: "#171D1C",
          surface: "#303633",
          // error: "",
          onPrimary: "#",
          onSecondary: "#",
          onBackground: "#F1F5F2",
          onSurface: "#F1F5F2",
          // onError: ""
        }
      },
    },
  },
  plugins: [],
}
