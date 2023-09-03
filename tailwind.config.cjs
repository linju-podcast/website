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
        }
      },
      animation: {
        first: 'first 5s linear infinite',
        second: 'second 5s linear infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
