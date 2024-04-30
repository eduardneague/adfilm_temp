import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        mustica: ["mustica", 'sans'],
        "mustica-light": ["mustica-light", "sans"],
        "mustica-semibold": ["mustica-semibold", "sans"],
        "mustica-black": ["mustica-black", "sans"],
        "mustica-bold": ["mustica-bold", "sans"],
      }
    },
  },
  plugins: [],
};
export default config;
