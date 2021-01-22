<template>
  <div id="container">
    <h1 class="mt-5">Adventurer Guild</h1>
      <div class="home">
        <div>
          <label for="forRoom">Room name:</label>
          <input v-model="roomname" id="forRoom" type="text">
          <button @click.prevent="addNewRoom">create</button>
        </div>
      </div>
    <div id="flex">
      <div v-for="(room, i) in roomnameFromState" :key="i">
        <button class="room" v-if="userCountFromState < 4" @click.prevent="goToRoom(room)" > {{ room }} </button>
      </div>
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
      this.$socket.emit('addUser', ({
        room: this.$store.state.room,
        payload: 1
      }))
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
#container {
    margin: 0px;
    max-width: 98%;
    padding: 0px;
}

#flex {
    overflow-y: scroll;
    text-align: center;
    max-height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 40px;
    flex-wrap: wrap;
}

.room {
    width: 280px;
    text-align: center;
    margin-left: 20px;
    margin-bottom: 30px;
    min-height: 100px;

}
</style>
