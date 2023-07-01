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
      purple: '#bc8bf8',
      green: '#23f367',
      pink: '#ca39c4',
    },
    minHeight: {
      10: '10px',
    },
    extend: {},
  },
  plugins: [],
};
