<template>
  <div>
    <div class="chart-container" style="position: relative; height: 100%; width:50vw">
        <canvas id="chart-all"></canvas>
    </div>
    <br/>
    <hr/>
    <router-view :key="$route.fullPath"></router-view>

    <hr/>

    <ul id="glogg-list">
      <span v-for="result in results" :key="result.nr">
        <router-link :to='{path: "/glogg/" + result.nr}'>
          <li class="glogg-list-item">
            <strong>{{result.name}}</strong>
          </li>
        </router-link>
      </span>    
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
      results: results,
      rgbstep: 50
    };
  },

  methods: {
    textfadeup: function(text, x, y, ctx) {
      var alpha = 0.0,   // zero opacity
          interval = setInterval(function () {
              // canvas.width = canvas.width; // Clears the canvas
              ctx.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
              //ctx.font = "italic 20pt Arial";
              ctx.fillText(text, x, y);
              alpha = alpha + 0.05; // increase opacity (fade in)
              if (alpha >= 1) {
                  // canvas.width = canvas.width;
                  clearInterval(interval);
              }
          }, 50); 
    }
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
      // var sum = 0;
      // for(var i=0; i<glogg.scores.length; i++){
      //   sum += glogg.scores[i];
      // }
      avg[j] = glogg.avg;
      j++;
    }
    
    Chart.defaults.global.defaultFontColor = '#666';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontFamily = 'Avenir';
    Chart.defaults.global.defaultFontStyle = 'bold';

    var canvas = document.getElementById("chart-all")
    var ctx = canvas.getContext('2d');

    var _this = this;

    var chartOptions = {
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
        events: false,
        tooltips: {
            enabled: false
        },
        hover: {
            animationDuration: 0
        },
        animation: {
          onProgress: function(animation) {
            // progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
          },
          onComplete: function(){
            var chartInstance = this.chart,
                ctx = chartInstance.ctx;
            ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
            ctx.textAlign = 'left';
            ctx.textBaseline = 'bottom';

            // VISA VÄRDE PÅ TOPPEN AV BARSEN, FUNKAR EJ?!?!?!=?#!="#"
            this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                    var data = dataset.data[index];                            
                    _this.textfadeup(data, bar._model.x + 5, bar._model.y + 13, ctx);
                });
            });
          },
          duration: 3000
        },
        maintainAspectRatio: false,
        legend: {
          display: false,
          labels: {
            fontColor: 'white',
            defaultFontSize: 18,
          }
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: false,
              labelString: "Medelbetyg"
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              display: false,
              beginAtZero:true,
              fixedStepSize: 1,
              suggestedMax: 5

            }
          }],
          yAxes: [{
            scaleLabel: {
              display: false,
              
            },
            ticks: {
              autoSkip: false,
              position: "left",
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
          }]
        }
      }
    };

    var myChart = new Chart(ctx, chartOptions);

    console.log(myChart);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  hr {
    width: 70%;
    border-top: 4px double darkred;
    text-align: center;
  }
  hr:after {
    content: '\002665';
    display: inline-block;
    position: relative;
    top: -15px;
    padding: 0 10px;
    background: white;
    color: darkred;
    font-size: 18px;
  }
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

  .glogg-list-item, .glogg-list-item:visited {
    color: darkred;
    list-style-type: none;
    display: inline-block;
    padding: 10px 0;
    border: 2px solid #f3f3f3;
    width: 200px;
    margin: 5px;
    font-size: 12px;
    font-family: 'Avenir';
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
