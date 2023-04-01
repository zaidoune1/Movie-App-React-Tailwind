/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
    },
    extend: {
      fontSize : {
            sm: '0.8rem',
            base: '5.2rem',
            xl: '1.25rem',
      },
      screens : {
        'phone': {'min': '390px', 'max': '700px'},
        'tabDesktop': {'min': '700px', 'max': '865px'},
        'desktop': {'min': '865px', 'max': '1223px'},
      },
      colors: {
        reactColor : {
          500:'#c4302b',
          200:'#fff',
          400:'#000000',
          600:'#202020',
          800:'#444'
        },
        fontSize : {
          bold: "font-bold"
        },
      },
    },
  },
  plugins: [],
}
