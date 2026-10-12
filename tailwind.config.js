/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0D",
        surface: "#131316",
        paper: "#F3F0EA",
        mute: "#A09DA5",
        line: "#2C2C32",
        violet: { DEFAULT: "#8B5CF6", soft: "#B49CFF" },
        moss: "#C8F264",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        mega: ["clamp(3.5rem, 10vw, 8.5rem)", { lineHeight: "0.92", letterSpacing: "-0.05em" }],
        huge: ["clamp(2.25rem, 5.6vw, 4.75rem)", { lineHeight: "1", letterSpacing: "-0.04em" }],
        big: ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
      },
      maxWidth: { page: "84rem" },
    },
  },
  plugins: [],
};
