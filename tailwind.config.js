/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.675rem',
        'xs': '0.75rem',
        'base': '1rem',
        '3.5xl': '2rem',
        '2xl':'1.5rem',
        '6xl':'4rem',
        '8xl':'5rem',
      },
      letterSpacing: {
        tighter: '-0.25rem',
      },
      gap:{
        '15':'3.75rem'
      }
    }
  },
  plugins: [],
};
