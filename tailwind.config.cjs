/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },

    colors: {
      purple: '#bd93f9',
      white: '#fcf7fb',
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

    extend: {},
  },
};
