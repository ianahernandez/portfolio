import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Styles */
import './assets/scss/main.scss'

/* Tailwind */
import './assets/css/tailwind.css'

/* Font Style */
import './assets/css/icofont.min.css'

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from "vue2-hammer";
Vue.use(VueHammer);

VueHammer.config.swipe = {
  threshold: 200
};


/* Vue Resource */
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = process.env.VUE_APP_URL;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

