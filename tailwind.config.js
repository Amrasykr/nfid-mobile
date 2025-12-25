/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        urban: ["Urban-Regular", "sans-serif"],
        "urban-bold": ["Urban-Bold", "sans-serif"],
        "urban-semibold": ["Urban-SemiBold", "sans-serif"],
        "urban-light": ["Urban-Light", "sans-serif"],
      },
      colors: {
        primary: "#d8dfe9",
        accent: "#eff0a3",
        success: "#cfdeca",
        error: "#f5c6c6",

        blue: "#cfd8e6", 
        purple: "#e1d7f0", 

        white: "#f6f5fa",
        black: "#212121",
        background: "#efefef",
      },
    },
  },
  plugins: [],
};
