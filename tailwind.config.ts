import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Ink & neutrals
        ink: {
          DEFAULT: "#0A0B0E",
          2: "#15171C",
        },
        gray: {
          100: "#EFEFEC",
          200: "#E1E3E7",
          300: "#C7C9CE",
          500: "#6E7079",
          700: "#3F4148",
          900: "#1F2128",
        },
        paper: "#F7F6F2",

        // Blues — electric royal (from the BeCon logo gradient).
        // 500 is the primary brand blue; 700 is the deep end of the gradient.
        navy: {
          DEFAULT: "#060B3A",
          2: "#0B1456",
        },
        blue: {
          100: "#E6F0FE",
          200: "#C2DBFA",
          300: "#6CB8F5",
          400: "#3D85ED",
          500: "#1F66E8",
          600: "#1948C7",
          700: "#1426A8",
          800: "#0E1689",
        },
        // Cyan — the LIGHT end of the logo gradient (use sparingly).
        cyan: {
          DEFAULT: "#4DBEFA",
          soft: "#9BDBFC",
        },

        // Orange — primary accent (vivid)
        orange: {
          100: "#FCE3D2",
          200: "#FBC9A8",
          300: "#F58F47",
          400: "#F26B1F",
          500: "#E85D04",
          600: "#C8480F",
          700: "#A53A05",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter-tight)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        // (size, [line-height, letter-spacing, weight])
        eyebrow: ["11px", { lineHeight: "1.4", letterSpacing: "0.14em", fontWeight: "500" }],
        small: ["13px", { lineHeight: "1.5", letterSpacing: "0.01em", fontWeight: "500" }],
        body: ["16px", { lineHeight: "1.65", letterSpacing: "0", fontWeight: "400" }],
        lead: ["19px", { lineHeight: "1.55", letterSpacing: "-0.005em", fontWeight: "300" }],
        h3: ["20px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
        h2: ["28px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        h1: ["38px", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "600" }],
        d2: ["56px", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "600" }],
        d1: ["80px", { lineHeight: "1.0", letterSpacing: "-0.035em", fontWeight: "700" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
        normal: "0",
        wide: "0.04em",
        wider: "0.08em",
        widest: "0.14em",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "22px",
        pill: "100px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(10,11,14,0.04), 0 1px 1px rgba(10,11,14,0.03)",
        md: "0 1px 2px rgba(10,11,14,0.04), 0 8px 24px -8px rgba(10,11,14,0.08)",
        lg: "0 2px 4px rgba(10,11,14,0.05), 0 18px 40px -10px rgba(10,11,14,0.12)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backgroundImage: {
        // Mirrors the wordmark gradient (cyan → royal → deep).
        // Cyan end pulled in earlier so the bulk of the text reads as blue, not cyan.
        "logo-gradient":
          "linear-gradient(90deg, #4DBEFA 0%, #2C7FF0 35%, #1F66E8 65%, #1426A8 100%)",
      },
      maxWidth: {
        container: "1200px",
        prose: "560px",
      },
      spacing: {
        "section-y": "5rem",
        "section-x": "max(1.5rem, calc((100% - 1200px) / 2))",
      },
    },
  },
  plugins: [],
};

export default config;
