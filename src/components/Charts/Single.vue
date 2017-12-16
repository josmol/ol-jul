<template>
  <div class="chart-single">
    <p>Chart-Single {{nr}} </p>
    <svg class="chart-single-svg"></svg>
  </div>
</template>

<script>
import results from '@/assets/gloggResults';
export default {
  name: 'Chart-single',
  props: ['nr'],
  data() {
    return {
      results: results
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
