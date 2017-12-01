<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="julrim">JULRIM</button>
    <audio id="rim-audio">
      <source type="audio/wav" src="../assets/ho-ho.wav"></audio>
    </audio>
    <button v-on:click="julklappar">JULKLAPPSTIPS</button>
    <button v-on:click="glogg">OL TESTAR GLÖGG</button>
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
      console.log("CLICKED JULRIM BUTTON")
      var audio = document.getElementById("rim-audio");
      audio.play();
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
}

button:hover{
  height: 60px;
  width: 160px;
}
</style>
