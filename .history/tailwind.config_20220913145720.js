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
      "md": "5px 5px 16px 0 rgba(0, 0, 0, 0.25), -3px -3px 16px 0 rgba(255, 255, 255, 0.3);",
      "dk": "4px 4px 16px 0 rgba(255, 255, 255, 0.3)"
    },
  },
  plugins: [],
}
