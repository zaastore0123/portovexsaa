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
        base: {
          950: "#05070D",
          900: "#0A0E1A",
          800: "#0F1526",
          700: "#161D33",
        },
        electric: {
          400: "#5B9DFF",
          500: "#3B82F6",
          600: "#2563EB",
        },
        violet: {
          400: "#A78BFA",
          500: "#8B5CF6",
        },
        ink: {
          100: "#E9ECF5",
          300: "#B4BBD1",
          500: "#7C84A0",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(59,130,246,0.18) 0%, rgba(139,92,246,0.08) 45%, rgba(5,7,13,0) 80%)",
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,7,13,0) 0%, #05070D 100%)",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(59,130,246,0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
