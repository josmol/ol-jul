<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="julrim">JULRIM</button>
    <audio id="rim-audio">
      <source type="audio/wav" src="../assets/ho-ho.wav"></audio>
    </audio>
    <button v-on:click="glogg">OL TESTAR GLÖGG</button>

    <div id="santa-animation">
      <img id="santa-animation-image" src="../assets/santa.gif" width="200"/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'JUL ÄR KUL'
    }
  },
  methods: {
    julrim: function () {
      var audio = document.getElementById('rim-audio')
      audio.play()
    },
    glogg: function () {
      var audio = document.getElementById('rim-audio')
      audio.play()
    },
    flyingSanta: function () {
      var audio = document.getElementById('santa-audio')
      audio.play()
      var santaimage = document.getElementById('santa-animation-image')
      var value = -200
      for (var i = 0; i < 20000; i++) {
        setTimeout(() => {
          value = value + 0.1
          santaimage.style.left = value + 'px'
        }, 100)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button{
  background-image: url("../assets/sign.png");
  background-position: center center;
  background-repeat:  no-repeat;
  background-color: transparent;
  background-size:contain;
  height: 50px;
  width: 200px;
  outline: none;
  border: none;
  font-size: 18px;
  color:#331a00;
  font-weight: bold;
  margin: 20px;
}

button:hover{
  height: 55px;
  width: 205px;
}

#santa-animation{
  position: relative;
}

#santa-animation-image{
  position: absolute;
  left:-200px;
}

</style>
