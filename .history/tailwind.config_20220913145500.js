/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sora: ['Sora']
    },
    extend: {
      backgroundImage: {
        'hero-entreprise': "url('/src/assets/desktop/hero-cta.jpeg')"}
    },
    boxShadow: {
      "md": "6px 6px 16px 0 rgba(0, 0, 0, 0.25), -4px -4px 12px 0 rgba(255, 255, 255, 0.3);",
      "dk": "6px 6px 14px 0 rgba(255, 255, 255, 0.3)"
    },
  },
  plugins: [],
}
