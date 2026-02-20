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
        // Monochrome + Accent (Apple-inspired minimalism)
        white: "#FFFFFF",
        black: "#000000",
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#64748B",
          700: "#374151",
          800: "#1F2937",
          900: "#0F172A",
        },
        accent: {
          DEFAULT: "#0EA5E9",  // Teal
          dark: "#0284C7",
        },
        // Semantic colors
        success: "#10B981",
        error: "#EF4444",
        warning: "#F59E0B",
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
