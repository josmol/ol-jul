<template>
  <div class="chart-all">
    <svg class="chart-all"></svg>
  </div>
</template>

<script>
import * as d3 from 'd3';
import results from '@/assets/gloggResults';
export default {
  name: 'Chart-all',
  data() {
    return {
      width: 500,
      height: 500,
      results: results
    };
  },
  mounted() {
    d3
      .select('svg.chart-all')
      .attr('width', this.width)
      .attr('height', this.height);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
