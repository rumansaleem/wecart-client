// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require('tailwindcss');

module.exports = {
  siteName: 'WeCart',
  plugins: [],
  css: {
    loaderOptions: {
      postcss:{
        plugins: [tailwindcss('./tailwind.config.js')]
      }
    }
  }
}