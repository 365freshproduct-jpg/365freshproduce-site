import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        forest: "rgb(var(--forest) / <alpha-value>)",
        pine: "rgb(var(--pine) / <alpha-value>)",
        mint: "rgb(var(--mint) / <alpha-value>)",
        graphite: "rgb(var(--graphite) / <alpha-value>)",
        stone: "rgb(var(--stone) / <alpha-value>)",
        cloud: "rgb(var(--cloud) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        panel: "0 24px 80px rgba(9, 20, 18, 0.18)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
