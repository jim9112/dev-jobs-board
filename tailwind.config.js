module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'primary-violet': '#5964E0',
      'primary-light-violet': '#939BF4',
      'secondary-white': '#FFFFFF',
    },
    fontFamily: {
      main: ['Kumbh Sans', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
