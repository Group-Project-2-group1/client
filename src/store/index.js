import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    hp: 0,
    score: 0
  },
  mutations: {
    SOCKET_init (state, payload) {
      state.hp = payload
    },
    SOCKET_currentHp (state, payload) {
      state.hp = state.hp - payload
    },
    SOCKET_myScore (state, payload) {
      state.score = state.score + payload
    },
    SOCKET_username (state, payload) {
      state.username = payload
    }
  },
  actions: {
  }
})
