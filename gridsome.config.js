module.exports = {
  siteName: 'Ondolin',
  titleTemplate: "%s",
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: 'tailwind.config.js',
        //presetEnvConfig: {},
        shouldPurge: false,
        //shouldImport: true,
        //shouldTimeTravel: false
      }
    }
  ]
};
