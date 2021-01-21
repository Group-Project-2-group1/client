<template>
  <div class="home">
    <h1 v-if="hpMonster > 0" >{{ hpMonster }}</h1>
    <div v-if="hpMonster === 0" class="score">
      <h2>Your Score</h2>
      <h1>{{ score }}</h1>
    </div>
    <button v-if="hpMonster > 0" @click.prevent="attack">Attack</button>
    <button v-if="hpMonster === 0">Play Again</button>
    <button v-if="hpMonster === 0">Exit Room</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      hp: 0
    }
  },
  components: {
  },
  methods: {
    attack () {
      this.$socket.emit('attack', 1)
      // this.$store.dispatch('decreaseHp')
    }
  },
  computed: {
    hpMonster () {
      return this.$store.state.hp
    },
    score () {
      return this.$store.state.score
    }
  },
  sockets: {
  }
}
</script>
