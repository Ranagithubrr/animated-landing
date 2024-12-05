/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#193444"
      },
      backgroundColor: {
        "brand-bg": "#193444",       
      },
    },
  },
  plugins: [],
};
