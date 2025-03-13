import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        lato: ["var(--font-lato)", "sans-serif"],
        mulish: ["var(--font-mulish)", "sans-serif"],
        syne: ["var(--font-syne)", "sans-serif"], // Add this line
      },
    },
  },
  plugins: [],
};

export default config;