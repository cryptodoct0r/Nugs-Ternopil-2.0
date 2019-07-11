import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md' && 'fa',
  theme: {
    primary: '#fcd116',
    success: '#006b3f',
    info: "ffaa2c",
    error: '#ce1126'
  }
})