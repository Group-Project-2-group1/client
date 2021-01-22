<template>
  <div>
    <announcement></announcement>
    <register-form></register-form>
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm'
import Announcement from '../components/Announcement'

export default {
  name: 'Player',
  components: {
    Announcement,
    RegisterForm
  }
}
</script>

<style>
#formPlayer {
  width: 20vw;
  margin: 0px auto;
}
</style>
