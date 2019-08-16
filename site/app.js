import Vue from 'vue'
import App from './app'

import Store from './store'
import Router from './routes'


Vue.component('App')

const vm = new Vue({
  name: 'insur-ence',
  el: '#app',
  render: h => h(App),
  components : {
    App
  },
  Store,
  Router
})