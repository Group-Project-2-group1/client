import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    hp: 100,
    score: 0,
    roomname: [],
    room: '',
    userConnected: 0,
    startCondition: true
  },
  mutations: {
    SOCKET_init (state, payload) {
      state.hp = payload
    },
    SOCKET_currentHp (state, payload) {
      state.hp = payload
    },
    SOCKET_myScore (state, payload) {
      state.score = state.score + payload
    },
    SOCKET_username (state, payload) {
      state.username = payload
      router.push({ path: '/' })
    },
    SOCKET_roomname (state, payload) {
      state.roomname = payload
    },
    SOCKET_currentPlayer (state, payload) {
      state.userConnected = payload
    },
    SOCKET_changeStart (state, payload) {
      state.startCondition = payload
    },
    changeCurrentRoom (state, payload) {
      state.room = payload
    },
    SOCKET_toRoute (state, payload) {
      router.push(payload)
    },
    SOCKET_toLobby (state, payload) {
      router.push(payload)
    },
    SOCKET_start (state, payload) {
      state.hp = payload
    },
    clearUsername (state, payload) {
      state.username = payload
    }
  },
  actions: {
  }
})
