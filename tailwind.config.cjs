/** @type {import('tailwindcss').Config} */
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
      green: '#23f367',
      pink: '#ff79c6',
      translucent: 'rgba(255,255,255,0.2)',
      line: 'rgba(255,255,255,0.25)',
      specialLine: 'rgba(255,255,255,0.5)',
    },
    flex: {
      1: '1',
    },
    borderWidth: {
      1: '1px',
    },
    extend: {},
  },
  plugins: [],
};
