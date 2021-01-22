import Vue from 'vue'
import VueRouter from 'vue-router'
import GameRoom from '../views/GameRoom'
import Ingame from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)
const routes = [
  {
    path: '/ingame',
    name: 'Ingame',
    component: Ingame
  },
  {
    path: '/player',
    name: 'Player',
    component: () => import('../views/Player.vue')
  },
  {
    path: '/gameRoom',
    name: 'GameRoom',
    component: GameRoom
  },
  {
    path: '/',
    name: 'Lobby',
    component: () => import('../views/Lobby.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function lookLogin () {
  return store.state.username !== ''
}

router.beforeEach((to, from, next) => {
  switch (to.name) {
    case 'Lobby':
      if (lookLogin()) next()
      else next({ name: 'Player' })
      break
    case 'Player':
      if (lookLogin()) next({ name: 'Lobby' })
      else next()
      break
    case 'GameRoom':
      if (lookLogin()) next()
      else next({ name: 'Player' })
      break
    default:
      next()
      break
  }
})

export default router
