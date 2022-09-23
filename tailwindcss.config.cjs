/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
        serif: ['Charis SIL'],
      },
      backgroundImage: {
        justice: 'url("/justica.jpg")',
      },
    },
  },
  plugins: [],
};
