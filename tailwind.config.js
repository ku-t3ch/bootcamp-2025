// tailwind.config.js
import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'Fuchsia-blue': '#865EBF',
        'Indigo': '#4541BF'
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
