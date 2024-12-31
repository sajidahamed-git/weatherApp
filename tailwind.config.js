/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily:{
            sans:['Poppins','sans-serif']
        },
        backgroundImage:{
            'night':"url('./assets/night.jpg')",
        },
        animation:{
          shake: 'shake 0.5s ease-in-out'
        }
      },keyframes:{
        shake:{
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)' },
        }
      }
    },
    plugins: [],
  }
  