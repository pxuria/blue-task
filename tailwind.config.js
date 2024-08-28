/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        primary: "#3094ea",
        secondary: "#0C65B3",
        muted: "#737789",
      },
    },
  },
  plugins: [],
};
