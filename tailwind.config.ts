import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF8F3",
        ink: "#1A1A1A",
        gold: "#C9A961",
        copper: "#B07A3D",
        teal: "#1AAFA0",
        navy: "#162646",
        // sub-brand soft tints used for backgrounds
        moiraTint: "#FBF3E6",
        navyTint: "#E9ECF3",
        cropTint: "#F3F0E6",
        gummyTint: "#FBEFEF",
        tealTint: "#E6F6F4",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"EB Garamond"', "Georgia", "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"IBM Plex Mono"',
          "ui-monospace",
          "monospace",
        ],
      },
      letterSpacing: {
        tightish: "-0.015em",
        tighter2: "-0.025em",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
        "inout-soft": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
