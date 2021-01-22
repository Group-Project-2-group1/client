<template>
  <div id="app">
    <div id="nav">
      <router-link id="lobby" to="/">Fighting Monster</router-link>
      <button v-if="username" @click.prevent="clearUsername" class="btn-danger" id="out">Retire</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Player',
  methods: {
    clearUsername () {
      this.$store.commit('clearUsername', '')
      this.$router.push('Player')
    }
  },
  computed: {
    username () {
      return this.$store.state.username
    }
  }
}
</script>

<style>
#lobby {
  float: left;
  text-decoration: none;
  margin-left: 30px;
  margin-top: -10px;
}

#out {
  float: right;
  margin-right: 30px;
  margin-top: -14px;
  border-radius: 5px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: #42b983;
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
