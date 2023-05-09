import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch, faCloudSun, faMapMarkerAlt, faCalendar, faSun, faMoon, faWind, faSmile, faCloud } from '@fortawesome/free-solid-svg-icons'
import './assets/styles/index.less'

library.add(faSearch,faCloudSun, faMapMarkerAlt, faCalendar, faSun, faMoon, faWind, faSmile, faCloud)

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
