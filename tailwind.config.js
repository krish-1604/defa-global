// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        golden: '#D4B873',
        darkblue: '#004884',
      },
      fontFamily: {
        vertrio: ['Vertrio','sans-serif'],
        hk: ['Hk','sans-serif'],
      },
    },
  },
  plugins: [],
}
