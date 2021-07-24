module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      'primary-violet': '#5964E0',
      'primary-light-violet': '#939BF4',
      'primary-very-dark-blue': '#19202D',
      'primary-midnight': '#121721',
      'secondary-white': '#FFFFFF',
      'secondary-light-grey': '#F4F6F8',
      'secondary-grey': '#9DAEC2',
      'secondary-dark-grey': '#6E8098',
    },
    fontFamily: {
      main: ['Kumbh Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: (theme) => ({
        'header-desktop': "url('/assets/desktop/bg-pattern-header.svg')",
        'header-tablet': "url('/assets/tablet/bg-pattern-header.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
