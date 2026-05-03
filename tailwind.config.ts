import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "var(--surface)",
          secondary: "var(--surface-secondary)",
          tertiary: "var(--surface-tertiary)",
          card: "var(--surface-card)",
          elevated: "var(--surface-elevated)",
          overlay: "var(--surface-overlay)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          secondary: "var(--ink-secondary)",
          muted: "var(--ink-muted)",
          faint: "var(--ink-faint)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          bright: "var(--accent-bright)",
          dim: "var(--accent-dim)",
          muted: "var(--accent-muted)",
          faint: "var(--accent-faint)",
          contrast: "var(--accent-contrast)",
        },
        mint: {
          DEFAULT: "var(--mint)",
          muted: "var(--mint-muted)",
        },
        navy: {
          DEFAULT: "var(--navy)",
          light: "var(--navy-light)",
        },
        gold: {
          DEFAULT: "var(--gold)",
          muted: "var(--gold-muted)",
        },
        line: {
          DEFAULT: "var(--line)",
          accent: "var(--line-accent)",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px var(--accent-faint)",
        "glow-sm": "0 0 30px var(--accent-faint)",
        "glow-accent": "0 0 20px var(--accent-muted)",
        pill: "0 4px 30px rgba(0,0,0,0.12), 0 0 0 1px var(--line)",
        card: "0 1px 3px rgba(0,0,0,0.06), 0 0 0 1px var(--line)",
        "card-hover": "0 8px 30px rgba(0,0,0,0.08), 0 0 0 1px var(--line-accent)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        pill: "100px",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
