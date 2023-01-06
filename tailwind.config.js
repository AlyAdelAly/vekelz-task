/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports =  withMT( {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'custom-lg': '960px',
        'laptop': '1220px'
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
});
