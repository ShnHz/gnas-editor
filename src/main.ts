import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'highlight.js/styles/monokai.css';

const app = createApp(App)

import gnasEditor from '../package/gnas-editor';
app.use(gnasEditor as any);


app.use(createPinia())
app.use(router)

app.mount('#app')
