<template>
  <div class="GameRoom">

    <p v-if="userConnected < 4">People on this party: {{ userConnected }} (need 4 people)</p>
    <button v-if="userConnected >= 4 && startCondition === true" @click.prevent="startGame">START</button>

    <audio id="sound1" src="../assets/hit.wav" preload="auto"></audio>
<!-- disable first, enable after start button -->
    <div class="gamePlay"
     v-if="userConnected >= 4 && startCondition === false">
     <h3>HP</h3>
      <h1 v-if="hpMonster > 0" >{{ hpMonster }} / 100</h1>
      <img onclick="document.getElementById('sound1').play();" class="btn btn-outline-light" @click.prevent="attack" src="../assets/monster.png" width="200px">
      <!-- <button onclick="document.getElementById('sound1').play();"
       v-if="hpMonster > 0" @click.prevent="attack"
      >Attack</button> -->
      <h5>Hit to defeat them</h5>
      <p>(If you hit the monster fastly they will regen some HP)</p>
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
      this.$store.state.hp = 100
      this.$store.state.score = 0
      // main show hide lagi,kembali ke posisi awal
    },
    exitGame () {
      this.$router.push({ path: '/' })
    },
    startGame () {
      this.$store.state.hp = 100
      this.$store.state.score = 0
      this.$socket.emit('changeStart', ({
        room: this.$store.state.room,
        payload: false
      }))
      this.$socket.emit('start', ({
        room: this.$store.state.room,
        payload: this.$store.state.hp
      }))
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
    },
    startCondition () {
      return this.$store.state.startCondition
    },
    userConnected () {
      console.log(this.$store.state.userConnected, 'sasasasasa')
      return this.$store.state.userConnected
    }
  },
  sockets: {
  },
  mounted () {
    this.startCondition()
  }

}
</script>
