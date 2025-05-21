import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: ["./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Fuchsia-blue": "#865EBF",
        Indigo: "#4541BF",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
