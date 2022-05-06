<template>
  <div class="chart_line_mini">
    <canvas :id="`line-chart-${chartId}`"></canvas>
  </div>
</template>

<script>

import {
  Chart,
  registerables} from "chart.js";

Chart.register(...registerables);
export default {
  name: "LineChart",
  props: {
    chartTitle: String,
    chartId: Number,
    chartLabels: Array,
    chartData: Array,
    chartColor: {
      type: String,
      default: "rgba(20, 196, 88, 1)"
    }
  },
  data() {
    return {
      LineChart: null
    }
  },
  mounted() {
    if(this.LineChart)this.LineChart.destroy()
    const chart = document.getElementById(`line-chart-${this.chartId}`).getContext("2d"),
                  gradientGreen = chart.createLinearGradient(0, 240, 0, 350);
                  gradientGreen.addColorStop(0, "rgba(20, 196, 88, 0.3)");
                  gradientGreen.addColorStop(0.5, "rgba(20, 196, 88, 0.1)");
                  gradientGreen.addColorStop(1, "rgba(20, 196, 88, 0)");

    const data = {
       labels: this.chartLabels,
      datasets: [
        {
          label: "Некущий год",
          fill: false,
          // backgroundColor: gradientGreen,
          pointBackgroundColor: this.chartColor,
          pointBorderColor: "#ffffff",
          pointBorderWidth: 4,
          // pointStyle: 'line',
          pointRadius: 0,
          borderWidth: 4,
          borderColor: this.chartColor,
          data: this.chartData,
          // min: 0,
          yAxisID: "yAxis",
          xAxisID: "xAxis",
        }
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 4,
      animation: {
        easing: "easeInOutQuad",
        duration: 800,
      },
      scales: {
        yAxis: {
          ticks: {
            // stepSize: 50,
            display: false,
          },
          grid: {
            // color: "rgba(20, 196, 88, 0)",
            // borderColor: '#48474F',
            display: false,
            drawTicks: false,
            // borderDash: [5, 5],
            lineWidth: 0,
          },
        },
        xAxis: {
          ticks: {
            // stepSize: 50,
            display: false
          },
          grid: {
            // color: '#48474F',
            borderColor: '#48474F',
            drawOnChartArea: false,
            display: false,
            drawBorder: false,
            // borderDash: [9, 9],
            lineWidth: 0,
          },
        },
      },
      elements: {
        line: {
          tension: 0.5,
        },
        arc: {
          // backgroundColor: "#fff",
        },
      },
      
      
      point: {
        backgroundColor: "white",
      },
      tooltips: {
        titleFontFamily: "Open Sans",
        backgroundColor: "rgba(255,255,255,0.5)",
        titleFontColor: "#333",
        bodyFontColor: "#333",
        caretSize: 15,
        cornerRadius: 3,
        xPadding: 15,
        yPadding: 15,
        custom: function (tooltipModel) {},
      },
      plugins: {
        legend: {
          hidden: true,
          display: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      tooltip: {
                usePointStyle: true,
                callbacks: {
                    labelPointStyle: function(context) {
                      console.log();
                        return {
                            // pointStyle: 'triangle',
                            pointRadius: 3,
                            rotation: 4
                        };
                    }
                }
            }
      }
    };
    this.LineChart = new Chart(chart, {
      type: "line",
      data: data,
      options: options,
    });
  }
};
</script>
<style lang="sass">

</style>