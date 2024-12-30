/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#8f00ff",
        dark: "#0f172a",
        secondary: "#64748b",
        boxShadow: {
          primary: "0 10px 20px #8f00ff",
        },
      },
      screens: {
        "2xl": "1320px",
      },
      boxShadow: {
        primary: "0 2px 4px rgba(143, 0, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
