import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// MODULES
import baseState from './modules/base';

export default new Vuex.Store({
  modules: {
    baseState
  }
})

