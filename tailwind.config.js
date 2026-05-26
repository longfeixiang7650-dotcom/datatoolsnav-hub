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
          DEFAULT: '#052014',
          100: '#0A2E1A',
          200: '#0f3d22',
          300: '#14532D',
          400: '#166534',
          500: '#059669',
        },
        muted: {
          DEFAULT: '#34D399',
          light: '#6EE7B7',
        },
        surface: '#D1FAE5',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
