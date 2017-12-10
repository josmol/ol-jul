<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <modal class="modal" name="hello-world" delay="2" adaptive="true" @before-open="beforeOpen">
      MERRY CHRISTMAS EVERYONE!
      <button v-on:click="hide">CLOSE</button>
    </modal>
    <button id="santa-button" v-on:click="flyingSanta">WHERE IS SANTA?</button>
    <audio id="santa-audio">
      <source type="audio/wav" src="../assets/sleigh-bells.wav"></audio>
    </audio>
    <button id="julrim-button" v-on:click="julrim">JULRIM</button>
    <audio id="rim-audio">
      <source type="audio/wav" src="../assets/ho-ho.wav"></audio>
    </audio>
    <button id="glogg-button" v-on:click="glogg">OL TESTAR GLÖGG</button>
    <audio id="glogg-audio">
      <source type="audio/wav" src="../assets/glogg-sound.wav"></audio>
    </audio>

    <div id="santa-animation">
      <img id="santa-animation-image" src="../assets/santa.gif" width="200"/>
    </div>

  </div>
</template>


<script>
export default {
  name: 'JULBUS',
  data () {
    return {
      msg: 'JUL ÄR KUL'
    }
  },
  methods: {
    julrim: function () {
      var rimAudio = document.getElementById('rim-audio')
      rimAudio.play()
      this.$modal.show('hello-world', { foo: 'bar' })
    },
    glogg: function () {
      var glitterAudio = document.getElementById('glogg-audio')
      glitterAudio.play()
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
    },
    particles: function () {
    },
    show () {
      this.$modal.show('hello-world');
    },
    hide () {
      this.$modal.hide('hello-world');
    },
    beforeOpen (event) {
      console.log(event.params.foo);
    },
    beforeMount () {
      this.particles()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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

#julrim-button{
  position: absolute;
  top: 80%;
  left: 1%;
}

#glogg-button{
  position: absolute;
  top: 50%;
  right: 5%;
}
#santa-button{
  position: absolute;
  top: 25%;
  left: 15%;
}
.modal{
  color: black;
}

</style>
