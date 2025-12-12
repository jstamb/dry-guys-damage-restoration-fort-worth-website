/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "text": "#212529",
        "muted": "#6C757D",
        "accent": "#3E92CC",
        "primary": "#0A2463",
        "secondary": "#FF6700",
        "background": "#F8F9FA"
},
      fontFamily: {
        "heading": [
                "Inter, sans-serif",
                "sans-serif"
        ],
        "body": [
                "Inter, sans-serif",
                "sans-serif"
        ]
},
    },
  },
  plugins: [],
}