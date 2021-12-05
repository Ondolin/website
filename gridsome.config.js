// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Ondolin',
  titleTemplate: "%s",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",

    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'en-gb',
          'de-de'
        ],
        pathAliases: { // path segment alias for each locales
          'en-gb': '',
          'de-de': 'de'
        },
        fallbackLocale: 'en-gb', // fallback language
        defaultLocale: 'en-gb', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: false, // rewrite default locale, default: true
      }
    },
    {
      use: 'gridsome-plugin-plausible-analytics',
      options: {
        dataDomain: 'ondolin.de',
        outboundLinkTracking: false,
        customDomain: 'stats.ondolin.de'
      }
    }
  ]
}
