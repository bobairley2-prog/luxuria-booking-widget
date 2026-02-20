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
        // Beige/Cream Palette (serene luxury aesthetic)
        luxury: {
          // Core beiges/creams
          cream: {
            50: "#FFFEF9",    // Lightest cream (backgrounds)
            100: "#FAF8F3",   // Soft cream (cards, sections)
            200: "#F5F2EA",   // Light beige
            300: "#EBE6DB",   // Medium beige
            400: "#DDD6C7",   // Tan
            500: "#C9BEA8",   // Warm tan
          },
          // Neutral grays (for text, borders)
          gray: {
            50: "#F9F9F8",
            100: "#F0F0EF",
            200: "#E3E3E1",
            300: "#CACAC6",
            400: "#A8A8A3",
            500: "#78786F",
            600: "#5A5A52",
            700: "#424239",
            800: "#2E2E27",
            900: "#1A1A15",
          },
          // Black/white (minimal use)
          black: "#1A1A15",
          white: "#FFFEF9",
          // Accent (minimal gold - only for CTAs)
          accent: {
            light: "#E8D4B0",
            DEFAULT: "#C9A865",
            dark: "#A68951",
          },
        },
        // Semantic colors
        success: "#4A7C59",
        error: "#B85C5C",
        warning: "#D4A574",
      },
      fontFamily: {
        // Serif for headings (Crimson Pro)
        serif: ["var(--font-crimson-pro)", "Georgia", "serif"],
        // Sans-serif for body (Inter)
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Luxury scale
        "display": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }], // 56px
        "h1": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],        // 48px
        "h2": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],      // 36px
        "h3": ["1.75rem", { lineHeight: "1.3" }],                                // 28px
        "h4": ["1.5rem", { lineHeight: "1.35" }],                                // 24px
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],                          // 18px
        "body": ["1rem", { lineHeight: "1.6" }],                                 // 16px
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],                          // 14px
        "caption": ["0.75rem", { lineHeight: "1.4" }],                           // 12px
      },
      spacing: {
        // Generous spacing for luxury feel
        "18": "4.5rem",   // 72px
        "22": "5.5rem",   // 88px
        "26": "6.5rem",   // 104px
        "30": "7.5rem",   // 120px
        "34": "8.5rem",   // 136px
      },
      maxWidth: {
        "container": "1440px",
        "content": "1200px",
        "narrow": "800px",
      },
      borderRadius: {
        "luxury": "0.25rem", // Subtle, not too rounded
      },
      boxShadow: {
        "luxury": "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        "luxury-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)",
      },
    },
  },
  plugins: [],
};

export default config;
