<template>
  <div class="rim">
    
    <audio id="rim-audio">
      <source type="audio/wav" src="../assets/ho-ho.wav">
    </audio>
    <div class="rim-content">
      <a class="close-window" v-on:click="back">&times;</a>

      <p id="whattogive">Vad ska du ge bort?</p>

      <div class="selectgift">
      <button v-on:click="showstrumpor" class="nicebutton">Strumpor</button>
      <button v-on:click="showbok" class="nicebutton">En bok</button>
      <button v-on:click="showparadis" class="nicebutton">Paradisask</button>
      </div>
      <div class="selectgift">
        <button v-on:click="showcd" class="nicebutton">CD/Vinyl</button>
        <button v-on:click="showjacka" class="nicebutton">Jacka</button>
        <button v-on:click="showspegel" class="nicebutton">Spegel</button>
      </div>
      <div id="displayrim"><p>{{rim}}</p></div>

      <button v-on:click="back">Tillbaka</button>        
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rim',
  data() {
    return {
      rim: "",
    };
  },
  mounted() {
    var rimAudio = document.getElementById('rim-audio');
    rimAudio.play();
  },
  methods: {
    back: function () {
      this.$router.push({name: 'home'});
    },
    showstrumpor: function(){
      this.rim = "Har du varit snäll i år? Då slipper du frysa om dina tår."
    },
    showbok: function(){
      this.rim = "Bladen på denna är inte gröna, de har samma färg som en vit höna."
    },
    showparadis: function(){
      this.rim = "Don't think outside the box, här är en present som är väldigt ortodox"
    },
    showjacka: function(){
      this.rim = "Jag orkar inte snacka, här har du en jacka"
    },
    showcd: function(){
      this.rim = "Rund med hål i, hoppas den inte är dåli’"
    },
    showspegel: function(){
      this.rim = "I denna kan du titta när du vill ögonbrynen hitta"
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
  background-color:rgba(0,0,0,0.4)
}

.rim-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #100a30;
  background-image: url('../assets/rhyme_background.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;  border-radius: 10px;
  width: 70vw;
  min-height: 60vh;
}

button, .nicebutton {
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

.nicebutton{
  height: 35px;
  width: 110px;
  font-size:15px;
  margin:10px 10px;
}

#whattogive{
  font-size: 18px;
  color:white;
  font-weight: bold;
  margin-top:8vh;
}


.selectgift{
  display:block;
}

p{
  color:black;
}

.gift{
  display:inline-block;
  margin:0px 20px;
}

#displayrim{
  background-image: url('../assets/christmascard.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-color: transparent;
  width:40vw;
  height:10vw;
  margin-top:30px;
  margin-bottom:30px;
  margin-left:10%;
  margin-right:10%;
  padding-top:2vh;
  padding-left:1.5vh;
  padding-right:1.5vh;
  font-size:20px;
  color:black;
}

#displayrim p{
  margin-right:5vw;
  margin-left:5vw;
}

.close-window{
  margin-left: 92%;
  margin-top: 10px;
  font-size: 50px;
  color: white;
}
.close-window:hover{
  color: #666;
  cursor: pointer;
}

@media screen and (max-width: 760px) {
    #displayrim{
      width:50vw;
      height:33vw;
      padding-top:0px;
    }
}


</style>
