const tailwindcss = require('tailwindcss')

module.exports = {
  siteName: 'WeCart',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss('./tailwind.config.js')],
      },
    },
  },
}
