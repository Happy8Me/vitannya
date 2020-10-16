import Vue from 'vue'
import router from './router/rout.js'
import App from './App.vue'

//component button
import { MdButton } from 'vue-material/dist/components'
//vendors
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.use(MdButton) 
// ----------------------

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
