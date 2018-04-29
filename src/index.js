import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/normalize.css'

new Vue({
  el: '#app',
  router, //router: router
  store,
  render: h => h(App)
})