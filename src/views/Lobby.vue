<template>
  <div id="container">
    <h1 class="mt-5">Adventurer Guild</h1>
    <div id="flex">
      <button type="button" class="room">Room1</button>
      <button type="button" class="room">Room2</button>
      <button type="button" class="room">Room3</button>
      <button type="button" class="room">Room3</button>
      <button type="button" class="room">Room3</button>
      <button type="button" class="room">Room3</button>
      <button type="button" class="room">Room3</button>
      <button type="button" class="room">Room3</button>
      <button type="button" class="room">Room3</button>
      <button type="button" class="room">Room3</button>
      <button type="button" class="room">Room3</button>
      <button type="button" class="room">Room3</button>
      <button type="button" class="room">Room3</button>
      <button type="button" class="room">Room3</button>
      <button type="button" class="room">AddRoom</button>
    </div>
  </div>
</template>

<script>
export default {

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
