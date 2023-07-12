/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      purple: '#bd93f9',
      white: '#fcf7fb',
      pink: '#ff79c6',
      blue: '#282a36',
      green: '#50fa7b',
      translucent: 'rgba(255,255,255,0.2)',
      line: 'rgba(255,255,255,0.25)',
      specialLine: 'rgba(255,255,255,0.5)',
      background: '#bd93f9',
      navBar: '#6272a4',
    },
    flex: {
      1: '1',
    },
    borderWidth: {
      1: '1px',
    },

    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-20%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        bounce: 'bounce 5s cubic-bezier(0.1, -0.6, 0.2, 0) infinite',
      },
    },
  },
  plugins: [
    // plugin(function ({ addBase, theme }) {
    //   addBase({
    //     h1: { fontSize: theme('fontSize.2xl') },
    //     h2: { fontSize: theme('fontSize.xl') },
    //     h3: { fontSize: theme('fontSize.lg') },
    //   });
    // }),
  ],
};
