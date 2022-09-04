/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx,cjs}",
    ],
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
}
