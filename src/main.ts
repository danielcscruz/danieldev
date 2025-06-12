import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'

import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'

import { vuetify } from './plugins/vuetify'

const app = createApp(App)
const pinia = createPinia()

app.use(Particles, {
  init: async (engine) => {
    await loadSlim(engine)
  },
})
app.use(pinia)
app.use(vuetify)
app.use(router)

app.mount('#app')
