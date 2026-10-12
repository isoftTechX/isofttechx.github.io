/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0D",
        surface: "#131316",
        raised: "#1B1B20",
        paper: "#F2F0EC",
        mute: "#A9A7A7",
        line: "#2C2C32",
        violet: { DEFAULT: "#9B7BFF", deep: "#6D4FE0" },
        moss: "#C8F264",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Hanken Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        mega: ["clamp(2.9rem, 9.2vw, 9rem)", { lineHeight: "0.93", letterSpacing: "-0.04em" }],
        huge: ["clamp(2.3rem, 6vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        big: ["clamp(1.7rem, 3.4vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
      },
      maxWidth: { page: "88rem" },
    },
  },
  plugins: [],
};
