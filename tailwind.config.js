module.exports = {
  theme: {
    // Some useful comment
    container: {
      center: true,
      padding: '1rem',
    },

    extend: {
      maxWidth: {
        '1/3': '33.33%',
      },
      maxHeight: {
        'half-screen': '50vh',
      },
      height: {
        current: '1em',
      },
    },
  },
  variants: {
    // Some useful comment
    minHeight: ['responsive'],
    maxWidht: ['responsive'],
  },
  plugins: [
    // Some useful comment
  ],
}
