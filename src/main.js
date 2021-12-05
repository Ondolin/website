// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import LogoComponent from '~/components/Logo.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faLanguage, faBars, faClipboard } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

require('typeface-dancing-script')

import 'animate.css'

config.autoAddCss = false;
library.add(faLanguage, faBars, faClipboard);

export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('Logo', LogoComponent);

  Vue.component('font-awesome-icon', FontAwesomeIcon)

  appOptions.i18n.setLocaleMessage('de-de', require('~/locales/de-de.js'));
  appOptions.i18n.setLocaleMessage('en-gb', require('~/locales/en-gb.js'));

  head.script.push({
    src: "https://stats.ondolin.de/js/plausible.outbound-links.js",
    async: true,
    defer: true,
    "data-domain": "ondolin.de"
  });

}
