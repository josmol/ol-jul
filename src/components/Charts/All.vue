<template>
  <div>
    <div class="chart-container" style="position: relative; height: 100%; width:50vw">
        <canvas id="chart-all"></canvas>
    </div>

    <router-view :key="$route.fullPath"></router-view>
    <ul id="glogg-list">
      <li class="glogg-list-item" v-for="result in results" :key="result.nr">
        <router-link :to='{path: "/glogg/" + result.nr}'>{{result.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import * as d3 from 'd3';
import results from '@/assets/gloggResults';
import Chart from 'chart.js';

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
    // d3
    //   .select('svg.chart-all')
    //   .attr('width', this.width)
    //   .attr('height', this.height)
    //   .data(this.results);

    var avg = [];
    var j = 0;
    for(var glogg of this.results){
      var sum = 0;
      for(var i=0; i<glogg.scores.length; i++){
        sum += glogg.scores[i];
      }
      avg[j] = Math.round((sum/glogg.scores.length)*10)/10;
      j++;
    }
    
    Chart.defaults.global.defaultFontColor = '#666';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontFamily = 'Avenir';
    Chart.defaults.global.defaultFontStyle = 'bold';

    var canvas = document.getElementById("chart-all")
    var ctx = canvas.getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.results.map(glogg => { return glogg.name}),
        datasets: [{
          label: 'Medelbetyg',
          data: avg,
          backgroundColor: 'rgba(100, 0, 0, 1)',
          borderWidth: 1,
        }]
      },
      options: {
        animation: {
          onProgress: function(animation) {
            // progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
          },
          onComplete: function(){

            // VISA VÄRDE PÅ TOPPEN AV BARSEN, FUNKAR EJ?!?!?!=?#!="#"
            // this.data.datasets.forEach(function (dataset) {
            //   dataset.bars.forEach(function (bar) {
            //     ctx.fillText(bar.value, bar.x, bar.y - 5);
            //   });
            // })
          },
          duration: 3000
        },
        maintainAspectRatio: false,
        legend: {
          display: false,
          labels: {
            fontColor: 'white',
            defaultFontSize: 18
          }
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: false,
              labelString: "Medelbetyg"
            },
            gridLines: {
              display: false
            },
            ticks: {
              display: false,
              beginAtZero:true,
              fixedStepSize: 1,
              suggestedMax: 5

            }
          }],
          yAxes: [{
            ticks: {
              autoSkip: false
            },
            gridLines: {
              display: false
            }
          }]
        }
      }
    });

    console.log(myChart);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.chart-container{
margin-left: 20%;

}
  #chart-all {
    width: 100%;
    height: 300px;
  }

  #glogg-list{
    margin-right: 40px;
    
  }

  .glogg-list-item{
    list-style-type: none;
    display: inline-block;
    padding: 10px 0;
    border: 2px solid #f3f3f3;
    width: 200px;
    margin: 5px;
    font-size: 12px;
    text-align: center;
    border-radius: 10px;
  }

  .glogg-list-item a{
    text-decoration: none;
    color: black;
  }


  .glogg-list-item:hover, .glogg-list-item:active, .glogg-list-item:focus{
    background-color:#f3f3f3;
    cursor: pointer;
  }
</style>
