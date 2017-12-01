<template>
  <div class="glogg">
      <h1>Vilken glögg är bäst? OL har hela listan!</h1>
      <p>Ol har testat all glögg och här är resultatet.</p>
      <div id="charts"></div>
  </div>
</template>

<script>
const data = [
  {
    name: 'Glögg 1',
    score: 5
  },
  {
    name: 'Glögg 2',
    score: 3
  }
];

export default {
  name: 'Glogg',
  data() {
    return {
      results: data
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
