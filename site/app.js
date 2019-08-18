import Vue from 'vue'
import App from './app'

import Store from './store'
import router from './routes'

import './styles/main.scss'

Vue.component('App')

const vm = new Vue({
  name: 'insur-ence',
  el: '#app',
  Store,
  router,
  render: h => h(App),
  components : {
    App
  }
})