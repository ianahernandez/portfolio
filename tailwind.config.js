module.exports = {
  important: true,
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e2e2f5',
          200: '#d4d4e6',
          300: '#a4a4cc',
          400: '#5858a2',
          500: '#2F2E8B'
        },
        violet:'#5443C3',
        cream: '#F4F4F4',
      },
      screens: {
        xs: '400px',
      },
      boxShadow: {
        '3xl': '3px 3px 15px rgba(47, 46, 139, 0.41)',
      },
      transitionProperty: {
        'display': 'display'
      }
    },
    variants: {
      transitionProperty: ['responsive', 'hover', 'focus', 'display'],
    },
    plugins: [],
  }
}
