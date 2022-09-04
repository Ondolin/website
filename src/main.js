import { createApp } from 'vue'
import App from './App.vue'
import { Icon } from '@iconify/vue';

import { createI18n, useI18n } from 'vue-i18n'
// import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
    // TODO check for lang parameter
    locale: window.navigator.language.includes("de") ? "de" : "en"
});


import './index.css'
import 'typeface-dancing-script'
import 'typeface-montserrat'

import 'aos/dist/aos.css'
import Aos from 'aos';

Aos.init();

createApp(App)
    .use(i18n)
    .component("Icon", Icon)
    .mount('#app');
