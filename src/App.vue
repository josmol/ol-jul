<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

body{
    width: 100%;
    height: 100%;
    background-color: #100a30; 
    background-image: url("./assets/julbakgrund_transparent.png");
   background-position: center center;
   background-repeat:  no-repeat;
   background-attachment: fixed;
  background-size:  cover; 
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