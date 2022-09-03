import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { Icon } from '@iconify/vue';
import 'typeface-dancing-script'

createApp(App)
    .component("Icon", Icon)
    .mount('#app')
