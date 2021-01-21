import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    }
  },
  actions: {
    decreaseHp (context, payload) {
      payload = 1
      context.commit('hpMonster', payload)
    }
  }
})
