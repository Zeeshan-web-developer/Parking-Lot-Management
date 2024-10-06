/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {
      colors: {
        
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'button': '#629584',
        'button-hover': '#E2F1E7',
        'body': '#243642',
        'nav': '#387478',
       })
    },
  },
  plugins: [],
}

