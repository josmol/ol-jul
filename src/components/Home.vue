<template>

  <div class="hello">
    <img id="title" alt="God Jul från Osqledaren" src="../assets/godjol.png"/>
    <button id="julrim-button" v-on:mouseover="smokingHouse" v-on:click="julrim" >JULRIM</button>
    <audio id="rim-audio">
      <source type="audio/wav" src="../assets/ho-ho.wav">
    </audio>
    <button id="glogg-button" v-on:click="glogg">OL TESTAR GLÖGG</button>
    <audio id="glogg-audio">
      <source type="audio/wav" src="../assets/glogg-sound.wav">
    </audio>
    <div id="snow-gubbe">
      <img id="snow-gubbe-animation" src="../assets/snowgubbe.gif"/>
    </div>
    <div id="house">
      <img id="front-house" class="both-houses" src="../assets/House_loop.gif"/>
      <img id="back-house" class="both-houses" src="../assets/House_smoke.gif"/>
    </div>
 
  </div>



</template>



<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: ''
    };
  },
  methods: {
    julrim: function() {
 
      this.$router.push('Rim');
    },
    glogg: function() {
      this.$router.push('Glogg');
    },
    smokingHouse: function(){
      document.getElementById("back-house").style.visibility = "visible";
      document.getElementById("front-house").style.visibility = "hidden";
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

#julrim-button {
  position: absolute;
  top: 70%;
  left: 1%;

}
#glogg-button {
  position: absolute;
  top: 50%;
  right: 5%;
}
#title{
  width:17em;
}
.hello{
  height: 100vh;
  z-index: -1;
}
#snow-gubbe{
  position: absolute;
  top: 65%;
  left: 30%;
  z-index: -1;
}
#snow-gubbe-animation{
  width: 150px;
  height: 150px;
}
.both-houses{
  width: 350px;
  height: 700px;
  position: absolute;
  bottom: 0;
  left: 0;
}
#front-house{
  z-index: -2;
}
#back-house{
  z-index: -3;
  visibility: hidden;
}


/* IPAD  */
@media screen and (max-width: 768px) {
  #snow-gubbe{
    top: 75%;
    left: 40%;
  }
  #househover{
    display:none;
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
  #js-canvas{
    z-index: -100;
  }
}




</style>
