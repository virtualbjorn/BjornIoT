import '@babel/polyfill'
import Vue from 'vue'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import VueWorker from 'vue-worker'

import router from './router'

Vue.config.productionTip = false
Vue.use(VueWorker)
Vue.use(Vuetify)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

