import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { Icon } from '@iconify/vue';

createApp(App)
    .component("Icon", Icon)
    .mount('#app')
