<template>
  <div>
    <div class="chart-container" style="position: relative; height: 100%; width:50vw">
        <canvas id="chart-all"></canvas>
    </div>
    <ul>
      <li v-for="result in results" :key="result.nr">
        <router-link :to='{path: "/glogg/" + result.nr}'>{{result.name}}</router-link>
      </li>
    </ul>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import * as d3 from 'd3';
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

    var avg = new Array();
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
    Chart.defaults.global.defaultFontSize = 20;
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
            //progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
          },
          onComplete: function(){

            // VISA VÄRDE PÅ TOPPEN AV BARSEN, FUNKAR EJ?!?!?!=?#!="#"
            this.data.datasets.forEach(function (dataset) {
              dataset.bars.forEach(function (bar) {
                ctx.fillText(bar.value, bar.x, bar.y - 5);
              });
            })
          },
          duration: 3000
        },
        maintainAspectRatio: false,
        legend: {
          display: false,
          labels: {
            fontColor: 'white',
            defaultFontSize: 20
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

            },
          }],
          yAxes: [{
            ticks: {
              autoSkip: false
            },
            gridLines: {
              display: false
            },
            barThickness: 30
          }]
        }
      }
    });
  },



};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


  #chart-all {
    width: 100%;
    height: 700px;
  }

</style>
