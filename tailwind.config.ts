import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f7f6f2",
        surface: "#ffffff",
        primary: "#1a1a16",
        secondary: "#888880",
        muted: "#aaa9a0",
        border: "#e0ddd4",
        accent: "#1f5c2e",
        "tag-bg": "#eef4ef",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
