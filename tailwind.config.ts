import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        laurel: {
          DEFAULT: "#203E34",
          50: "#EDF3EF",
          100: "#DCE8E1",
          200: "#B9D0C5",
          300: "#8EB0A0",
          400: "#668F7D",
          500: "#466F5F",
          600: "#315445",
          700: "#203E34",
          800: "#1A322A",
          900: "#142720"
        },
        gold: {
          DEFAULT: "#B8944E",
          50: "#FBF7ED",
          100: "#F2E7CB",
          200: "#E5D197",
          300: "#D4B965",
          400: "#C4A255",
          500: "#B8944E",
          600: "#98763A",
          700: "#76592F",
          800: "#594425",
          900: "#3E2F1B"
        },
        ivory: "#F4EFE6",
        stone: "#D8CBB8",
        deepBlue: "#223746"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Montserrat", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(32, 62, 52, 0.10)",
        line: "0 1px 0 rgba(184, 148, 78, 0.20)"
      },
      borderRadius: {
        soft: "0.5rem"
      },
      maxWidth: {
        content: "1180px"
      }
    }
  },
  plugins: []
};

export default config;
