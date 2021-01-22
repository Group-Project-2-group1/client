<template>
  <div class="home">
    <div>
      <label for="forRoom">Room name:</label>
      <input v-model="roomname" id="forRoom" type="text">
      <button @click.prevent="addNewRoom">create</button>
    </div>

    <div v-for="(room, i) in roomnameFromState" :key="i">
      <button v-if="userCountFromState < 4" @click.prevent="goToRoom(room)" > {{ room }} </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      roomname: ''
    }
  },
  components: {
  },
  methods: {
    addNewRoom () {
      this.$socket.emit('addNewRoom', this.roomname)
      this.$store.commit('changeCurrentRoom', this.roomname)
      this.$router.push('GameRoom')
    },
    goToRoom (room) {
      this.$socket.emit('goToRoom', room)
      this.$store.commit('changeCurrentRoom', room)
      this.$router.push('GameRoom')
    },
    refresh () {
      return this.roomnameFromState
    }
  },
  computed: {
    roomnameFromState () {
      return this.$store.state.roomname
    },
    userCountFromState () {
      return this.$store.state.userConnected
    }
  },
  created () {
    this.refresh()
  }
}
</script>

<style>

</style>
