/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'main': ['Pacifico'],
      'text': ['Poppins'],
    },
    extend: {
      backgroundImage: {
        'landing-image': "url('./images/backgroundgroup.png')",
        'connect-image': "url('./images/Subtract.png')",
        'reel-image': "url('./images/2ndbg.png')",
        
      },
      colors: {
        'off-black': '#3C3C3C',
      },
      animation: {
        'slideshow': 'slideshow 18s linear infinite',
        'slideshow2': 'slideshow2 18s linear infinite',
      },
    },
      keyframes: {
        slideshow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideshow2: {
          '100%': { transform: 'translateX(0)' },
          '0%': { transform: 'translateX(-100%)' },
        }

      },
     
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
