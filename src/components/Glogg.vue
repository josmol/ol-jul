<template>
  <div class="glogg">
      <h1>Glögg!!</h1>
      <div id="charts"></div>
  </div>
</template>

<script>
export default {
  name: 'Glogg',
  data() {
    return {
      results: [
        {
          name: 'Glögg 1',
          score: 5
        },
        {
          name: 'Glögg 2',
          score: 3
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
