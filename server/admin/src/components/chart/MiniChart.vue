<template>
  <div class="chart_line">
    <h3>График продаж</h3>
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
    chartId: Number,
  }
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
       labels: [
          "Янв",
          "Фев",
          "Мар",
          "Апр",
          "Май",
          "Июн",
          "Июл",
          "Авг",
          "Сен",
          "Окт",
          "Ноя",
          "Дек",
        ],
      datasets: [
        {
          label: "Некущий год",
          fill: true,
          backgroundColor: gradientGreen,
          pointBackgroundColor: "rgba(20, 196, 88, 1)",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 3,
          pointRadius: 5,
          borderWidth: 3,
          borderColor: "rgba(20, 196, 88, 1)",
          data: [120,110,105,122,130,117,120,133,127,130,122,120],
          min: 0,
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
            // stepSize: 50
          },
          grid: {
            // color: "rgba(20, 196, 88, 0)",
            // borderColor: '#48474F',
            drawTicks: false,
            borderDash: [5, 5],
            lineWidth: 1,
          },
        },
        xAxis: {
          grid: {
            // color: '#48474F',
            // borderColor: '#48474F',
            drawBorder: false,
            borderDash: [9, 9],
            lineWidth: 1,
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
      legend: {
        hidden: true,
        display: false,
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
    };
    this.LineChart = new Chart(chart, {
      type: "line",
      data: data,
      options: options,
    });
  },
  beforeDestroy() {
    
  },
};
</script>
<style lang="sass">

</style>