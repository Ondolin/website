module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: {
          dark: '#433a6e',
          DEFAULT: '#574b90',
          light: '#6e61ad'
        },
        accent: {
          DEFAULT: '#feacc6',
          light: '#ffdee9'
        }
      },
      fontFamily: {
        logo: ['Dancing Script', 'cursive'],
      },
      spacing: {
        'px': '1px'
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'group-hover'],
      display: ['group-hover']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
}
