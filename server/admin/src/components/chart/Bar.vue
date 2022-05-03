<template>
  <div class="chart_bar">
    <h1>График продаж</h1>
    <canvas id="bar-chart"></canvas>
  </div>
</template>

<script>
// DataPage.vue
import {
  Chart,
  BarController,
  BarElement,
  PointElement,
  CategoryScale,
  Title,
} from "chart.js";
Chart.register(BarController, BarElement, PointElement, Title, CategoryScale);
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
            fill: 1,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            data: [
              1290, 1789, 1902, 1100, 895, 2459, 1678, 2100, 678, 1569, 1290,
              1877,
            ],
            // backgroundColor: gradient,
            // pointBackgroundColor: "#24b4ab",
            borderWidth: 3,
            borderColor: "#24b4ab",
            tension: 0.9,
          },
        ],
      },
    };
  },
  mounted() {
    const chart = document.getElementById("bar-chart").getContext("2d"),
            gradientFill1 = chart.createLinearGradient(0, 0, 1000, 0);
            gradientFill1.addColorStop((4/3)/5, "green");
            gradientFill1.addColorStop((4/3)/5, "red");
            gradientFill1.addColorStop(14/5/5, "red");
            gradientFill1.addColorStop(14/5/5, "green");
            gradientFill1.addColorStop(16/5/5, "green");
            gradientFill1.addColorStop(16/5/5, "red");
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
          label: "Прошлый год",
          fill: true,
          BackgroundColor: gradientFill1,
          pointBackgroundColor: "#24b4ab",
          borderWidth: 3,
          borderColor: "#24b4ab",
          data: [1290, 1789, 1902, 1100, 895, 2459, 1678, 2100, 678, 1569, 1290,1877],
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
            borderColor: '#48474F',
            drawTicks: false,
            drawBorder: false,
            borderDash: [5, 5],
            lineWidth: 1,
          },
        },
        xAxis: {
          grid: {
            color: '#48474F',
            borderColor: '#48474F',
            drawTicks: false,
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
    const BarChart = new Chart(chart, {
      type: "bar",
      data: data,
      options: options,
    });
  },
};
</script>
<style lang="sass">

</style>