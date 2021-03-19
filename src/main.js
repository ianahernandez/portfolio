import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos';
import VueMeta from 'vue-meta'

import 'aos/dist/aos.css';


/* Styles */
import './assets/scss/main.scss'

/* Tailwind */
import './assets/css/tailwind.css'

/* Font Style */
import './assets/css/icons.css'

// Vuejs - Vue wrapper for hammerjs
/* import { VueHammer } from "vue2-hammer";
Vue.use(VueHammer);

VueHammer.config.swipe = {
  threshold: 200
}; */

/* Vue markdown */
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
 
/* Vue AOS */
AOS.init()

/* Vue meta tags */
Vue.use(VueMeta)

/* Vue Resource */
import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.http.options.root = process.env.VUE_APP_URL;

Vue.config.productionTip = false


/* Filter date */
Vue.filter('dateFull', function (value) {
  if (!value) return ''
  try {
    let ndate = new Date(value.replace("-","/"))
    let dateFormatted = new Intl.DateTimeFormat('es-ES', { month: 'long', day: 'numeric', year: 'numeric' }).format(ndate)
    return dateFormatted;
  } catch {
    return value;
  }
  
})

Vue.filter('dateTime', function (value) {
  if (!value) return ''
  try {
    let ndate = new Date(value)
    let dateFormatted = new Intl.DateTimeFormat('es-ES', { month: 'long', day: 'numeric', year: 'numeric' }).format(ndate)
    return dateFormatted;
  } catch {
    return value;
  }
  
})
Vue.filter('dateTimeFull', function (value) {
  if (!value) return ''
  try {
    let ndate = new Date(value)
    let dateFormatted = new Intl.DateTimeFormat('es-VE', { dateStyle: 'full', timeStyle: 'short' }).format(ndate)
    return dateFormatted;
  } catch {
    return value;
  }
})

Vue.filter('dateShort', function (value) {
  if (!value) return ''
  try {
    let ndate = new Date(value.replace("-","/"))
    let dateFormatted = new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric' }).format(ndate)
    return dateFormatted;
  } catch {
    return value;
  }
})

Vue.filter('dateNumeric', function (value) {
  if (!value) return ''
  try {
    let ndate = new Date(value.replace("-","/"))
    let dateFormatted = new Intl.DateTimeFormat('es-ES', { }).format(ndate)
    return dateFormatted;
  } catch {
    return value;
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

