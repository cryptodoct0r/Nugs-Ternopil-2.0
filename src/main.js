import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1,
  listenEvents: ['scroll']
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')