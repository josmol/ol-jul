<template>
  <div class="glogg-preview">
    <div class="glogg-image">
      <img :src="glogg.img" width="120"/>
      <p><strong>{{glogg.name}}</strong> - {{glogg.producer}}</p>
    </div>
    <div class="glogg-info">
      <h2>OLs bedömmning</h2>
      <p><strong>Färg:</strong> {{glogg.color}}</p>
      <p><strong>Doft:</strong> {{glogg.scent}}</p>
      <p><strong>Förväntad smak:</strong> {{glogg.expectedFlavor}}</p>
      <p><strong>Smak:</strong> {{glogg.actualFlavor}}</p>
    </div>
    <!-- <svg class="chart-single-svg"></svg> -->
  </div>
</template>

<script>
import results from '@/assets/gloggResults';
export default {
  name: 'Chart-single',
  props: ['nr'],
  data() {
    return {
      glogg: results[this.nr-1]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chart-single {
  height: 500px;
  margin: 30px;
}
.glogg-preview{
  border: 2px solid #f2f2f2;
  margin: 20px 60px;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.glogg-image{
  grid-column: 1 / 2;
  grid-row: 1;
  padding: 5%;
}
.glogg-info{
  grid-column: 2 / 2;
  grid-row: 1;
  text-align: left;
  padding: 15%;
}
@media screen and (max-width: 480px) {
  .glogg-preview{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  }

  .glogg-image{
    grid-column: 1;
    grid-row: 1;
  }
  .glogg-image{
    grid-column: 2;
    grid-row: 2;
  }
}
</style>
