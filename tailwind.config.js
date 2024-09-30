// #84828F taupe gray #6A687A dim gray #536271 paynes gray
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "index.html",
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rocking: {
          '0%, 100%': { transform: 'rotate(-20deg)' },
          '50%': { transform: 'rotate(20deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'rocking': 'rocking 5s infinite',
      },
      colors: {
        purple: {
          600: '#6B46C1',
          700: '#5A3DA5',
        },
        green: {
          400: '#68D391',
          500: '#48BB78',
        },
        beige: {
          500: '#D8BBA3',
          600: '#C7A189',
        },
        yellow: {
          200: '#F6E05E',
          300: '#E2CF3C',
        },
        sliderBgColor: {
          500: '#edebeb',
        }
      },
    },
  },
  plugins: [],
}
