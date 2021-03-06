import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'

Vue.use(ToggleButton)
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    theme: false,
    count: -1,
    cards: [],
    dark: '',
    dark_card: '',
    edit: {
      state: false,
      id: '',
      description: '',
      date: '',
      date_end: '',
      name: '',
      status: ''
    },
    name: 'Dima'
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
