<template>
  <div class="GameRoom">

    <div v-if="player === ''" class="newPlayer">
      <input type="text" v-model="username" placeholder="Insert Your Username">
      <button @click.prevent="addPlayer" >Submit</button>
    </div>

    <div> <!-- button to start game -->
      <button @click.prevent="startGame">START</button>
    </div>

<!-- disable first, enable after start button -->
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
<!-- disable first, enable after start button -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'GameRoom',
  data () {
    return {
      username: '',
      room: this.currentRoom
    }
  },
  components: {
  },
  methods: {
    addPlayer () {
      this.$socket.emit('addPlayer', this.username)
    },
    attack () {
      this.$store.state.hp -= 1
      this.$socket.emit('attack', ({
        room: this.$store.state.room,
        payload: this.$store.state.hp
      }))
    },
    playAgain () {
      this.$store.state.hp = 10
      this.$store.state.score = 0
      // main show hide lagi,kembali ke posisi awal
    },
    exitGame () {
      this.$store.state.username = ''
      this.$store.state.hp = 10 // ini sepertinya ga perlu lagi
      this.$store.state.score = 0
      // routing ke home
    },
    startGame () {
      this.$store.state.hp = 50
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
    },
    currentRoom () {
      return this.$store.state.room
    }
  },
  sockets: {
  }
}
</script>
