<template>
  <div class="glogg-preview">
    <div class="glogg-image">
      <img :src="glogg.img" width="120"/>
      <p><strong>{{glogg.name}}</strong><br/>{{glogg.producer}}
      <br/><small>{{glogg.alc}}%, {{glogg.price}} kr</small></p>
    </div>
    <div class="glogg-info">
      <h2>Bedömmning</h2>
      <p><strong>Färg:</strong> {{glogg.color}}</p>
      <p><strong>Doft:</strong> {{glogg.scent}}</p>
      <p><strong>Förväntad smak:</strong> {{glogg.expectedFlavor}}</p>
      <p><strong>Smak:</strong> {{glogg.actualFlavor}}</p>
      <p><strong>Alkohol per krona:</strong> {{Math.round((glogg.alc/glogg.price)*100)/100}}</p>
      <p v-if="glogg.comment"><strong>Kommentarer:</strong> {{glogg.comment}}</p>
      <p><strong>Betyg:</strong> {{glogg.avg}}</p>
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
  border: 0px solid #f2f2f2;
  margin: 20px 120px;
  padding: 0px 0px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.glogg-image{
  grid-column: 1 / 2;
  grid-row: 1;
  padding: 0;
}
.glogg-info{
  grid-column: 2 / 2;
  grid-row: 1;
  text-align: left;
  padding-top: 0px;
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
