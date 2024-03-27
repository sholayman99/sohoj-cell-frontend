/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#149777",

          "secondary": "#FFC800",

          "accent": "#0866FF",

          "neutral": "#3a3939",

          "base-100": "#ffffff",

          "info": "#00547E",

          "success": "#09ef5a",

          "warning": "#facc15",

          "error": "#ea2222"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};