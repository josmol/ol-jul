<template>
  <div class="hello">
<<<<<<< Updated upstream
    <img id="title" src="../assets/godjol.png"/>
    <button id="santa-button" v-on:click="flyingSanta">WHERE IS SANTA?</button>
=======
    <h1>{{ msg }}</h1>
    <!-- <button id="santa-button" v-on:click="flyingSanta">WHERE IS SANTA?</button>
>>>>>>> Stashed changes
    <audio id="santa-audio">
      <source type="audio/wav" src="../assets/sleigh-bells.wav">
    </audio> -->
    <button id="julrim-button" v-on:click="julrim">JULRIM</button>
    <audio id="rim-audio">
      <source type="audio/wav" src="../assets/ho-ho.wav">
    </audio>
    <button id="glogg-button" v-on:click="glogg">OL TESTAR GLÖGG</button>
    <audio id="glogg-audio">
      <source type="audio/wav" src="../assets/glogg-sound.wav">
    </audio>
    <div id="santa-animation">
      <img id="santa-animation-image" src="../assets/santa.gif" width="200"/>
    </div>
    <div id="house">
      <img id="front-house" src="../assets/House_loop.gif"/>
      <!-- <img id="back-house" src="../assets/House_smoke.gif"/> -->
    </div>
    <div id="snow-gubbe">
      <img id="snow-gubbe-animation" src="../assets/snowgubbe.gif"/>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'GOD JOL'
    };
  },
  methods: {
    julrim: function() {
      var rimAudio = document.getElementById('rim-audio');
      rimAudio.play();
      rimAudio.onended = () => {
        this.$router.push('Rim');
      };
    },
    glogg: function() {
      var glitterAudio = document.getElementById('glogg-audio');
      glitterAudio.play();
      glitterAudio.onended = () => {
        this.$router.push('Glogg');
      };
    },
    flyingSanta: function() {
      var audio = document.getElementById('santa-audio');
      audio.play();
      var santaimage = document.getElementById('santa-animation-image');
      var value = -200;
      for (var i = 0; i < 20000; i++) {
        setTimeout(() => {
          value = value + 0.1;
          santaimage.style.left = value + 'px';
        }, 100);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  color: white;
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
  margin: 20px;
}

button:hover {
  height: 55px;
  width: 205px;
}

#santa-animation {
  position: relative;
}

#santa-animation-image {
  position: absolute;
  left: -200px;
}

#julrim-button {
  position: absolute;
  top: 80%;
  left: 1%;
}

#glogg-button {
  position: absolute;
  top: 50%;
  right: 5%;
}
#santa-button {
  position: absolute;
  top: 25%;
  left: 15%;
}

<<<<<<< Updated upstream
#title{
  width:17em;
=======
#snow-gubbe{
  position: absolute;
  top: 75%;
  left: 25%;
}
#snow-gubbe-animation{
  width: 150px;
  height: 150px;
}
#front-house{
  height: 250px;
  width: 150px;
  position: absolute;
  top: 20%;
  
}
/* IPAD  */
@media screen and (max-width: 768px) {
  #snow-gubbe{
    top: 75%;
    left: 40%;
  }

}
/* MOBILE */
@media screen and (max-width: 480px) {
  #santa-button{
    top: 20%;
    left: 18%
  }
  #glogg-button{
     top: 35%;
     left: 18%;
  }
  #julrim-button{
    top: 50%;
    left: 18%
  }
  #snow-gubbe{
    top: 75%;
    left: 10%;
  }
>>>>>>> Stashed changes
}

</style>
