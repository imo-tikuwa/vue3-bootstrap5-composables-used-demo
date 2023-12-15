import './scss/styles.scss'

import { createApp } from 'vue'
import App from './App.vue'

import { ConfirmModalPlugin, ComposableToastPlugin } from '@imo-tikuwa/vue3-bootstrap5-composables'

createApp(App).use(ConfirmModalPlugin).use(ComposableToastPlugin).mount('#app')
