import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import store from './Store/'
import router from './Routes/index'
import './styles/scss/main.scss'

import VueMq from 'vue-mq'
import axios from 'axios'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueMq, {
  breakpoints : {
    mobile: 320,
    phablet: 480,
    tablet: 1024,
    desktop: 1280,
    widescreen: 1440,
    hd: Infinity
  }
})
Vue.use(axios)

Vue.component('App')


const vm = new Vue({
  name: 'insur-ence',
  el: '#app',
  render: h => h(App),
  components : {
    App
  },
  router,
  store
})