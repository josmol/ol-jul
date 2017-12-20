<template>
  <div class="glogg">
    <audio id="glogg-audio">
      <source type="audio/wav" src="../assets/glogg-sound.wav">
    </audio>
    <div class="glogg-content">
      <h1>Vilken glögg är bäst i år? OL har listan!</h1>
      <img src="../assets/dsanta2.jpg" alt=""/>
      <p> </p>
      <router-view/>
      <button v-on:click="back">Tillbaka</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Glogg',
  methods: {
    back: function() {
      this.$router.push({ name: 'home' });
    }
  },

  mounted() {
    var glitterAudio = document.getElementById('glogg-audio');
    glitterAudio.play();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.glogg {
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}
.glogg-content {
  margin-top: 10px;
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;
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
