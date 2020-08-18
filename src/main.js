import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Tailwind */
import './assets/css/tailwind.css'

/* Styles */
import './assets/scss/main.scss'

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

