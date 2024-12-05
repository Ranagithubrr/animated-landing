/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#193444",
        "brand-secondary": "#50845e",
      },
      backgroundColor: {
        "brand-bg": "#193444",       
        "brand-bg-secondary": "#50845e",       
      },
    },
  },
  plugins: [],
};
