<template>
  <div class="glogg">
    <audio id="glogg-audio">
      <source type="audio/wav" src="../assets/glogg-sound.wav">
    </audio>
    <div class="glogg-content">
      <div class="close-window"><a v-on:click="back">&times;</a></div>
      <h1>OL testar: GLÖGG!</h1>    
      <!-- <img src="../assets/dsanta2.jpg" alt=""/> -->
      <router-view/>
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

  h1 {
    width: 80%;
  }
  .glogg {
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
  .glogg-content {
    position: relative;
    margin-top: 10px;
    background: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    width: 70vw;
    min-height: 50vh;
    padding-bottom: 50px;
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
  .close-window{
    position: absolute;
    right: 10px;
    margin-top: 0px;
    font-size: 50px;
  }
  .close-window:hover{
    color: #666;
    cursor: pointer;
  }

  /**
  * Ornaments
  */
  .ornaments {
    display: flex;
    //justify-content: center;
    //left: 50%;
    position: relative;
    //top: 50%;
    //transform: translate( -50%, -50% );
  }

  .ornament {
    background-color: #f06;
    background-image: radial-gradient(circle at right bottom,rgba(0,0,0,.6),rgba(0,0,0,.0));
    border-radius: 50%;
    box-shadow: inset 5px 5px 1em rgba(255,255,255,.6);
    height: 44px;
    margin: 0 1em;
    opacity: 0.5;
    position: relative;
    width: 44px;

    &:nth-of-type(1) {
      transform: rotate( -5deg );
      animation: ornament 2s infinite;
    }

    &:nth-of-type(2) {
      transform: rotate( 10deg );
      animation: ornament 2s 0.5s infinite;
    }

    &:nth-of-type(3) {
      transform: rotate( -10deg );
      animation: ornament 2s 1s infinite;
    }

    &::before {
      position: absolute;
      content: "";
      display: block;
      width: 10px;
      height: 5px;
      top: -4px;
      background-color: #fff;
      left: 50%;
      margin-left: -5px;
      border-radius: 2px 2px 0 0;
      background-image: linear-gradient( to right, rgba(0, 0, 0, 0), rgba( 0, 0, 0, 0.2 ), rgba( 0, 0, 0, 0 ) );
    }

    .hook {
      position: absolute;
      border-color: #aaa;
      height: 20px;
      width: 10px;
      border-width: 1px 1px 0 1px;
      top: -24px;
      border-style: solid;
      border-radius: 50% 50% 0 0;
      left: 21px;

      &::before {
        content: "";
        display: block;
        height: 50%;
        background-color: #ffffff;
        position: absolute;
        bottom: 0;
        width: 3px;
        right: -2px;
      }
    }
  }

  @keyframes ornament {
    0% { opacity: 0.5; }
    33% { opacity: 1; }
    67% { opacity: 0.5; }
  }
</style>
