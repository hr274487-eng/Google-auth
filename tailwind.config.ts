import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#080e1a",
          darker: "#050912",
          card: "#0f172a",
          cardHover: "#1e293b",
          border: "#1e293b",
          teal: {
            DEFAULT: "#0d9488",
            light: "#14b8a6",
            glow: "#2dd4bf",
          },
          cyan: {
            DEFAULT: "#0284c7",
            light: "#38bdf8",
          },
          orange: {
            DEFAULT: "#ea580c",
            light: "#f97316",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
