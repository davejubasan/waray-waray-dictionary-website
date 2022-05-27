module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': { 'min': '360px' },
      'laptop': { 'min': '1280px' },
      'desktop': { 'min': '1360px' },
    },

    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        merriweather: [" Merriweather", "serif"],
      },
      colors: {
        'aesthetic-100': '#8D4513',
        'aesthetic-200': '#B07946',
        'aesthetic-300': '#957755',
        'aesthetic-400': '#D2B48C',
        'aesthetic-500': '#FFF8DC',
        'aesthetic-hover-500': '#f1ecd2',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}