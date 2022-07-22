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
      boxShadow: {
        'popup-shadow': '0px 4px 4px #81D4F5',
        'title-shadow': ' 0px 4px 4px rgba(255, 255, 255, 0.25)',
      },

      dropShadow: {
        'popup-bg-shadow': 'drop-shadow(34px 56px 26px rgba(0, 0, 0, 0.03)) drop-shadow(19px 31px 22px rgba(0, 0, 0, 0.1)) drop-shadow(9px 14px 16px rgba(0, 0, 0, 0.17)) drop-shadow(2px 3px 9px rgba(0, 0, 0, 0.2)) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.2))',

      },

      colors: {
        'off-black': '#3C3C3C',
        'popup-items': '#DADADA',
      },
      animation: {
        'slideshow': 'slideshow 18s linear infinite',
        'slideshow2': 'slideshow2 18s linear infinite',
        'popup-spin': 'rotation 4s infinite linear',
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
        },
        rotation: {
          'from': {
            transform:' rotate(0deg)'},
          'to': {
            transform: 'rotate(359deg)'},
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
