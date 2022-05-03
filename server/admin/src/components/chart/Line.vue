<template>
  <div class="chart_line">
    <h3>График продаж</h3>
    <canvas id="line-chart"></canvas>
  </div>
</template>

<script>
// DataPage.vue
import {
  Chart,
  registerables} from "chart.js";

Chart.register(...registerables);
export default {
  name: "LineChart",
  mounted() {
    const chart = document.getElementById("line-chart").getContext("2d"),
                  gradientGreen = chart.createLinearGradient(0, 200, 0, 300);
                  gradientGreen.addColorStop(0, "rgba(20, 196, 88, 0.3)");
                  gradientGreen.addColorStop(0.5, "rgba(20, 196, 88, 0.1)");
                  gradientGreen.addColorStop(1, "rgba(20, 196, 88, 0)");
    const gradientRed = chart.createLinearGradient(0, 200, 0, 300);
                  gradientRed.addColorStop(0, "rgba(248, 62, 85, 0.3)");
                  gradientRed.addColorStop(0.5, "rgba(248, 62, 85, 0.1)");
                  gradientRed.addColorStop(1, "rgba(248, 62, 85, 0)");
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
          data: [100,110,140,120,130,100,120,160,130,140,134,190],
          min: 0,
          yAxisID: "yAxis",
          xAxisID: "xAxis",
        },
        {
          label: "Прошлый год",
          fill: true,
          backgroundColor: gradientRed,
          pointBackgroundColor: "rgba(248, 62, 85, 1)",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 3,
          pointRadius: 5,
          borderWidth: 3,
          borderColor: "rgba(248, 62, 85, 1)",
          data: [150,104,110,120,130,120,120,110,130,140,150,110],
          min: 0,
          yAxisID: "yAxis",
          xAxisID: "xAxis",
        },
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
      chartArea: {
        backgroundColor: 'rgba(251, 85, 85, 0.4)'
    },
      scales: {
        yAxis: {
          ticks: {
            // stepSize: 50
          },
          grid: {
            color: "#48474F",
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
          tension: 0.3,
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
    const LineChart = new Chart(chart, {
      type: "line",
      data: data,
      options: options,
    });
  },
};
</script>
<style lang="sass">

</style>