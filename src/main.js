import Vue from 'vue'
import Vuelidate from 'vuelidate';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'

Vue.use(VueTelInput)

Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
