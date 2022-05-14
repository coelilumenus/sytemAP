import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/base.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

import SButton from './ui/SButton.vue'
app.component('SButton', SButton)


