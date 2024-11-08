/** @type {import('tailwindcss').Config} */
const colors_ = require("./colors.js"); // Adjust the path if needed

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontSize: {
        heading: "4rem",
        subheading: "2rem",
        caption: "1rem",
      },
      colors: {
        login_main: "#212121",
        login_secondary: "#1A1A1A",
        app_main: "#1A1A1A",
        app_secondary: "#212121",
        text_primary: "#FFFFFF",
        button_primary: "#044687",
        button_secondary: "#1A1A1A",
        input_background: "#565656",
        input_placeholder: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
