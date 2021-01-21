<template>
  <div class="home">
    <div v-if="player === ''" class="newPlayer">
      <input type="text" v-model="username" placeholder="Insert Your Username">
      <button @click.prevent="addPlayer" >Submit</button>
    </div>

    <div v-if="player !== ''" class="gamePlay">
      <h1 v-if="hpMonster > 0" >{{ hpMonster }}</h1>
      <button v-if="hpMonster > 0" @click.prevent="attack">Attack</button>
    </div>

    <div v-if="hpMonster === 0 && player !== ''" class="score">
      <h2>Congratulations {{ player }}</h2>
      <h2>Your Score</h2>
      <h1>{{ score }}</h1>
      <button v-if="hpMonster === 0" @click.prevent="playAgain">Play Again</button>
      <button v-if="hpMonster === 0" @click.prevent="exitGame">Exit Game</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      username: ''
    }
  },
  components: {
  },
  methods: {
    addPlayer () {
      this.$socket.emit('addPlayer', this.username)
    },
    attack () {
      this.$socket.emit('attack', 1)
    },
    playAgain () {
      this.$store.state.hp = 10
      this.$store.state.score = 0
    },
    exitGame () {
      this.$store.state.username = ''
      this.$store.state.hp = 10
      this.$store.state.score = 0
    }
  },
  computed: {
    hpMonster () {
      return this.$store.state.hp
    },
    score () {
      return this.$store.state.score
    },
    player () {
      return this.$store.state.username
    }
  },
  sockets: {
  }
}
</script>
