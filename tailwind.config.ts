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
          dark: "#060912",
        },
        slate: { custom: "#2D3A52" },
        teal: {
          DEFAULT: "#00C9A7",
          dim: "#009E84",
          bright: "#00e5ff",
        },
        gold: { DEFAULT: "#C9A84C" },
        mist: {
          DEFAULT: "#F5F7FA",
          dim: "rgba(245,247,250,0.75)",
          muted: "rgba(245,247,250,0.45)",
          ghost: "rgba(245,247,250,0.08)",
        },
        cyber: {
          blue: "#1a73e8",
          purple: "#6e40c9",
          red: "#ff4757",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(rgba(0,201,167,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,167,0.04) 1px, transparent 1px)",
        "cyber-gradient": "linear-gradient(135deg, #0A0E1A 0%, #111827 25%, #0d2238 50%, #111827 75%, #0A0E1A 100%)",
        "glow-radial": "radial-gradient(ellipse at center, rgba(0,201,167,0.08) 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        glow: "0 0 80px rgba(0, 201, 167, 0.12)",
        "glow-sm": "0 0 40px rgba(0, 201, 167, 0.08)",
        "glow-lg": "0 0 120px rgba(0, 201, 167, 0.15), 0 0 40px rgba(0, 201, 167, 0.1)",
        "glow-teal": "0 0 20px rgba(0, 201, 167, 0.25), 0 0 60px rgba(0, 201, 167, 0.1)",
        "inner-glow": "inset 0 0 30px rgba(0, 201, 167, 0.05)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
