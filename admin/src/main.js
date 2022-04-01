import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import socketIO from './plugins/socket'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(socketIO)
app.mount('#app')
