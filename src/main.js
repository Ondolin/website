import { createApp } from 'vue'
import App from './App.vue'
import { Icon } from '@iconify/vue';

import { createI18n, useI18n } from 'vue-i18n'
// import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
    locale: window.navigator.language.includes("de") ? "de" : "en"
});


import './index.css'
import 'typeface-dancing-script'
import 'typeface-montserrat'

import 'aos/dist/aos.css'
import Aos from 'aos';
import {initRouter} from "./router";

Aos.init();

const app = createApp(App);
app.use(i18n);
app.component("Icon", Icon);

app.config.globalProperties.$window = window;


initRouter(app);
// TODO set browser default
// app.config.globalProperties.$i18n.locale = window.navigator.language.includes("de") ? "de" : "en";

app.mount('#app');
