import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/api/http'
Vue.config.productionTip = false
Vue.prototype.$http=axios
// Vue.prototype.$eventBus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
