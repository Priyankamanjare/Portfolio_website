/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      screens: {
        xs: ''
      },
       keyframes: {
    scroll: {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-50%)' },
    },
  },
  animation: {
    scroll: 'scroll 15s linear infinite',
  },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

