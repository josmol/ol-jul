<template>
  <div class="chart-1">
    <p>Chart-1</p>
    <svg class="chart-1-svg"></svg>
  </div>
</template>

<script>
export default {
  name: 'Chart-1',
  data() {
    return {
      results: 'test'
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
