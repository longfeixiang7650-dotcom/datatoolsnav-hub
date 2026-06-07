/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: {
          DEFAULT: '#0f0a1e',
          100: '#1a1233',
          200: '#2a1a4e',
          300: '#3b2566',
          400: '#4c2d82',
          500: '#6366F1',
        },
        muted: {
          DEFAULT: '#818cf8',
          light: '#a5b4fc',
        },
        surface: '#e0e7ff',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
