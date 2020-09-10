import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from '@/store'
import toast from 'components/common/toast'
import fastclick from 'fastclick'
import vueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast)
fastclick.attach(document.body)
Vue.use(vueLazyload,{
  preLoad: 1.3,
  error: require('assets/img/loading.gif'),
  loading: require('assets/img/loading.gif'),
  attempt: 1
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
