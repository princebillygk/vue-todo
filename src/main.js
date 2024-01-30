import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, far, fas)

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
