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
        "mustica-medium": ["mustica-medium", "sans"],
      },
      boxShadow: {
        'glow': '0 0 7px 1px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;
