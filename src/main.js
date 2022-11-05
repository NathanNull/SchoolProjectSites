import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {far} from '@fortawesome/free-regular-svg-icons'
library.add(far)
import {fas} from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import {dom} from '@fortawesome/fontawesome-svg-core'
dom.watch()

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')