import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
