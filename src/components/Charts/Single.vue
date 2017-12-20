<template>
  <div>
    <p>{{glogg.name}} </p>
    <img :src="glogg.img" width="120"/>
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
</style>
