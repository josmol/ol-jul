<template>
  <div class="chart-1">
    <p>Chart-1</p>
    <p>{{results}}</p>
    <svg class="chart-1-svg"></svg>
  </div>
</template>

<script>
import results from '../../assets/gloggResults';
export default {
  name: 'Chart-1',
  data() {
    return {
      results: results
    };
  },
  methods: {
    back: function() {
      this.$router.push({ name: 'home' });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chart-1 {
  height: 500px;
  margin: 30px;
}
</style>
