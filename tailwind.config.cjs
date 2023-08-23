/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    colors: {
      primary: '#AB539B',
      secondary: '#2C68B2',
      accent: '#71C7D5',
      white: '#FFFFFF',
      purple: '#bd93f9',

      pink: '#ff79c6',
      blue: '#282a36',
      darkBlue: 'rgba(98,114, 164,0.5)',
      green: '#50fa7b',
      translucent: 'rgba(255,255,255,0.2)',
      line: 'rgba(255,255,255,0.25)',
      specialLine: 'rgba(255,255,255,0.5)',
      navBar: '#6272a4',
      orange: '#ffb86c',
      cyan: '#8be9fd',
    },
    fontFamily: {
      sans: ['LXGW Wenkai', 'sans-serif'],
    },
    extend: {
      keyframes: {
        first: {
          '0%': {
            transform: 'translateY(100%)',
          },
          '10%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(-100%)',
          },
        },
        second: {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
          '60%': {
            transform: 'translateY(-100%)',
          },
          '90%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(-200%)',
          },
        },
      },
      animation: {
        first: 'first 5s linear infinite',
        second: 'second 5s linear infinite',
      },
    },
    plugins: [require('@tailwindcss/typography')],
  },
};
