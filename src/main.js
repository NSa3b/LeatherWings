import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faCircleChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from'bootstrap/dist/js/bootstrap.js'

import './assets/main.css'

//Font Awesome icons used
library.add(faCartPlus,faUser,faCircleChevronLeft,faCircleChevronRight,faChevronLeft,faTrashCan)

const app = createApp(App)

app.use(router)

app.use(bootstrap)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
