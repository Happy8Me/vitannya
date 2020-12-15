import Vue from 'vue'
import router from './router/rout.js'
import App from './App.vue'

import "@babel/polyfill"; //polyfill for IE
import "core-js/stable"; //polyfill for IE
import "regenerator-runtime/runtime"; //polyfill for IE
import 'whatwg-fetch'  //Fetch polyfill for IE

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
