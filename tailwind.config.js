/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'suite-purple': '#9a06c6',
        'suite-orange': '#ff540d',
        'suite-beige': '#fafaf7',
        'suite-black': '#1a1a1a',
      },
      lineHeight: {
        'extra-relaxed': '1.8',
      },
    },
  },
  plugins: [],
} 