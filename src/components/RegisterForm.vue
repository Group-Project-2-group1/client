<template>
  <form id="formPlayer">
    <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text">@</div>
      </div>
      <input v-model="username" type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
    </div>
    <button @click.prevent="addPlayer" class="btn-primary" id="regBtn">Register</button>
    <p id="fee">(free of charge)</p>
  </form>

</template>

<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    addPlayer () {
      this.$socket.emit('addPlayer', this.username)
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
#regBtn {
    border-radius: 5px;
    margin: 10px 0 0 0;
}

#fee {
    font-size: 14px;
}
</style>
