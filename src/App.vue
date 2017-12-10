<template>
  <div id="app">
    <particles/>
    <router-view/>
  </div>
</template>

<script>
import particles from './components/Particles';

export default {
  name: 'app',
  components: { particles }
};
</script>

<style>
body {
  background-color: #100a30;
  background-image: url('./assets/julbakgrund_transparent.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>

<!--  --> 