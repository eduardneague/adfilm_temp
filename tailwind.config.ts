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
      },
      screens: {
        '400px': '400px',
        '3xl': '2400px',
        '1440p': '2560px',
        '4xl': '3000px',
        '5xl': '3400px',
        '4k': '3840px',
      }
    },
  },
  plugins: [],
};
export default config;
