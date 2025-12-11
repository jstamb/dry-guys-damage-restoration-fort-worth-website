/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "text": "#333333",
        "muted": "#BDBDBD",
        "accent": "#FF9800",
        "primary": "#0D47A1",
        "secondary": "#212121",
        "background": "#F5F5F5"
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