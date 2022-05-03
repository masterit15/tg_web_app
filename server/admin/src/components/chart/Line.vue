<template>
  <div class="chart_line">
    <h1>График продаж</h1>
    <canvas id="line-chart"></canvas>
  </div>
</template>

<script>
// DataPage.vue
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
} from "chart.js";

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
export default {
  name: "LineChart",
  data() {
    return {
      chartData: {
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
            label: "Количество заказов",
            backgroundColor: "#f87979",
            data: [
              1290, 1789, 1902, 1100, 895, 2459, 1678, 2100, 678, 1569, 1290,
              1877,
            ],
            // backgroundColor: gradient,
            pointBackgroundColor: "#14C458",
            borderWidth: 3,
            borderColor: "#14C458",
            tension: 0.9,
          },
        ],
      },
    };
  },
  mounted() {
    const chart = document.getElementById("line-chart").getContext("2d"),
                  gradient = chart.createLinearGradient(0, 233, 0, 450);
                  gradient.addColorStop(0, "rgba(36, 180, 171, 0.7)");
                  gradient.addColorStop(0.5, "rgba(36, 180, 171, 0.4)");
                  gradient.addColorStop(1, "rgba(36, 180, 171, 0.1)");
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
      BackgroundColor: "#14C458",
      datasets: [
        {
          label: "Прошлый год",
          fill: true,
          BackgroundColor: "#14C458",
          pointBackgroundColor: "#14C458",
          borderWidth: 3,
          borderColor: "#14C458",
          data: [1290, 1789, 1902, 1100, 895, 2459, 1678, 2100, 678, 1569, 1290,1877],
          min: 0,
          yAxisID: "yAxis",
          xAxisID: "xAxis",
        },
        {
          label: "Текущий год",
          fill: {
                target: 'origin',
                above: 'rgb(255, 0, 0)',   // Area will be red above the origin
                below: 'rgb(0, 0, 255)'    // And blue below the origin
              },
          BackgroundColor: "#14C458",
          pointBackgroundColor: "#14C458",
          borderWidth: 3,
          borderColor: "#14C458",
          data: [1000, 1100, 1100, 1200, 1300, 1200, 1200, 1100, 1300, 1400, 1500,1100],
          min: 0,
          yAxisID: "yAxis",
          xAxisID: "xAxis",
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: true,
      animation: {
        easing: "easeInOutQuad",
        duration: 2000,
      },
      chartArea: {
        backgroundColor: 'rgba(251, 85, 85, 0.4)'
    },
      scales: {
        yAxis: {
          ticks: {
            // stepSize: 120
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