import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSimpleMarkdown from 'vue-simple-markdown'


/* Styles */
import './assets/scss/main.scss'

/* Tailwind */
import './assets/css/tailwind.css'

/* Font Style */
import './assets/css/icons.css'

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from "vue2-hammer";
Vue.use(VueHammer);

VueHammer.config.swipe = {
  threshold: 200
};

/* Vue markdown */
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
 
Vue.use(VueSimpleMarkdown)



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

