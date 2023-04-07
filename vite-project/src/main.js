import { createApp } from 'vue/dist/vue.esm-bundler'
import './style.css'
import App from './App.vue'
import { router } from './router.js'

createApp(App).use(router).mount('#app')
