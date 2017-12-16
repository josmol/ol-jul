<template>
  <div class="rim">
    <div class="rim-content">
      <h1>JULRIM</h1>
      <button v-on:click="back">Tillbaka</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rim',
  methods: {
    back: function () {
      this.$router.push({name: 'home'});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.rim {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.rim-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  width: 70vw;
  min-height: 50vh;
}

button {
  background-image: url('../assets/sign.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: contain;
  height: 50px;
  width: 200px;
  outline: none;
  border: none;
  font-size: 18px;
  color: #331a00;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: 30px;
}

button:hover {
  height: 55px;
  width: 205px;
}
</style>
