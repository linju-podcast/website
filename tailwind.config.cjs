/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['LXGW Wenkai', 'sans-serif']
    },
    extend: {
      keyframes: {
        first: {
          '0%': {
            transform: 'translateY(100%)'
          },
          '10%': {
            transform: 'translateY(0)'
          },
          '40%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-100%)'
          },
          '100%': {
            transform: 'translateY(-100%)'
          }
        },
        second: {
          '0%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(0)'
          },
          '60%': {
            transform: 'translateY(-100%)'
          },
          '90%': {
            transform: 'translateY(-100%)'
          },
          '100%': {
            transform: 'translateY(-200%)'
          }
        },
        swing: {
          '0%': {
            transform: 'rotate(-25deg)'
          },
          '10%': {
            transform: 'rotate(25deg)',
            transform: 'scale(1)'
          },
          '15%': {
            transform: 'rotate(-25deg)'
          },
          '20%': {
            transform: 'rotate(25deg)',
            transform: 'rotate(1.25)'
          },
          '25%': {
            transform: 'rotate(-25deg)',
            transform: 'scale(1.25)'
          },
          '100%': {
            transform: 'rotate(-25deg)',
            transform: 'scale(1.25)'
          }
        }
      },
      animation: {
        first: 'first 5s linear infinite',
        second: 'second 5s linear infinite',
        swing: 'swing 2s linear 1'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
