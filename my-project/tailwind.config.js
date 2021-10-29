module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
       },
       colors: {
        cyan = colors.cyan
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
