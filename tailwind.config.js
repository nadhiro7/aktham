/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'desktop': '1440px',
      
      // => @media (min-width: 1280px) { ... }
    },
    colors:{
      primary: '#662C91',
      secondary: '#36AFA8',
      sideBarBg: '#33333D',
      linkColor: '#66BF85',
      success: '#00823E',
      danger: '#C32518',
      bgColor: '#F5F5F5'
    },
    borderRadius: {
      xsf: '1.75px',
      smf: '1.79px',
      mdf: '2.67px',
      ...require('tailwindcss/defaultConfig').theme.borderRadius,
    },
    extend: {

    },
  },
  plugins: [],
}