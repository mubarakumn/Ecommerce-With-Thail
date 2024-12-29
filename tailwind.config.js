/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': { max: '640px' },  // Applies styles below 640px
        'max-md': { max: '768px' },  // Applies styles below 768px
        'max-lg': { max: '1024px' }, // Applies styles below 1024px
        'max-xl': { max: '1280px' }, // Applies styles below 1280px
      },
    },
  },
  plugins: [
    function ( { addUtilities }){
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      })
    }
  ],
}

