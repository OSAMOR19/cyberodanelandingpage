import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A0E1A",
          mid: "#111827",
          light: "#1E2A40",
        },
        slate: { custom: "#2D3A52" },
        teal: {
          DEFAULT: "#00C9A7",
          dim: "#009E84",
        },
        gold: { DEFAULT: "#C9A84C" },
        mist: {
          DEFAULT: "#F5F7FA",
          dim: "rgba(245,247,250,0.75)",
          muted: "rgba(245,247,250,0.45)",
          ghost: "rgba(245,247,250,0.08)",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(rgba(245,247,250,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,247,250,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      boxShadow: {
        glow: "0 0 80px rgba(0, 201, 167, 0.12)",
        "glow-sm": "0 0 40px rgba(0, 201, 167, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
