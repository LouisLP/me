import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import '@fontsource-variable/bricolage-grotesque/index.css'
import './styles/main.css'

createApp(App).use(router).mount('#app')
