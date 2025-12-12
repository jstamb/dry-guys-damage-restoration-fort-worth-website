/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: "#212529",
        muted: "#6C757D",
        accent: "#3E92CC",
        background: "#F8F9FA",
        // Primary color scale (dark blue #0A2463)
        primary: {
          50: "#E8EBF4",
          100: "#C5CCE3",
          200: "#9FAAD0",
          300: "#7988BD",
          400: "#5C6FAE",
          500: "#3F569F",
          600: "#364A8F",
          700: "#2B3C7A",
          800: "#0A2463",  // Main color
          900: "#061844",
          DEFAULT: "#0A2463"
        },
        // Secondary color scale (orange #FF6700)
        secondary: {
          50: "#FFF3E6",
          100: "#FFE0BF",
          200: "#FFCC95",
          300: "#FFB86A",
          400: "#FFA84A",
          500: "#FF6700",  // Main color
          600: "#E65C00",
          700: "#CC5200",
          800: "#B34700",
          900: "#993D00",
          DEFAULT: "#FF6700"
        }
      },
    },
  },
  plugins: [],
}
