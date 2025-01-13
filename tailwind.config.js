/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans'],
        arkhip: ['arkhip']
      },
      colors: {
        'darkBlue': '#000D19',
        'logoBlue': '#3E84A8'
      },
      animation: {
        'zoomHero': 'zoomHero 8s forwards'
      },
      keyframes: {
        zoomHero: {
          '0%': { transform: 'scaleX(1) scaleY(1)' },
          '100%': { transform: 'scaleX(1.1) scaleY(1.1)' },
        }
      }
    },
  },
  plugins: [],
}

