import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  e1: '#app',
  router,
  components: { App },
  template: '<App/>'
})
