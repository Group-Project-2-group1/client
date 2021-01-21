import Vue from 'vue'
import VueRouter from 'vue-router'
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
    path: '/',
    name: 'Lobby',
    component: () => import('../views/Lobby.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function lookLogin () {
  store.commit('getIsLogin')
  return store.state.isLogin
}

router.beforeEach((to, from, next) => {
  switch (to.name) {
    case 'Lobby':
      // if (lookLogin()) next()
      // else next({ name: 'Player' })
      next()// hapus bagian ini jika guard aktif
      break
    case 'Player':
      if (lookLogin()) next({ name: 'Lobby' })
      else next()
      break
    default:
      next()
      break
  }
})

export default router
