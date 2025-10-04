/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelPurple: "#d8b4fe",
        pastelGreen: "#a7f3d0",
        pastelBlue: "#bfdbfe",
      },
    },
  },
  plugins: [],
};
