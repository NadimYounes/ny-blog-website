/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"IBM Plex Serif"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        ink: '#0a0a0a',
        paper: '#faf7ef',
        accent: '#3b82f6',
        retro: '#ff8ba7',
      },
      backgroundImage: {
        retroGrid: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)'
      }
    },
  },
  plugins: [],
};
