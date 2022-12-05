import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

import GnasEditor from '../package/gnas-editor/index'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

app.use(createPinia())
app.use(router)
app.use(GnasEditor)
app.use(ArcoVue);

app.mount('#app')
