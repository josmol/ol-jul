<template>
<div class="container" id="js-container">

  <canvas class="canvas" id="js-canvas" width="1500" height="800"></canvas>
 
 <h1>God Jul!</h1>
 <button>Ta mig till julverkstaden!</button>

</div>

</template>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

  <script  src="./scratch.js"></script>

<script>
export default {
  name: 'Start',
  data() {
    return {
      msg: ''
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  /*padding: 20px 0;*/
}

.container {
  cursor:url(http://www.promo-ice-scrapers.com/contents/media/l_curved%20ice%20and%20snow%20scraper%20yellow.png), auto;
  position: relative;
  width: 100%;
  height: 900px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}



.canvas {
  position: absolute;
  top: 0;
  width: 100%;
}

h1{
  text-align: center;
}

button{
  margin-left: 45%;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
}



</style>
