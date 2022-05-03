<template>
  <div class="chart_bar">
    <h3>График продаж</h3>
    <canvas id="line-chart-year"></canvas>
  </div>
</template>

<script>
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
      BarChart: null,
    }
  },
  mounted() {
    if(this.BarChart)this.BarChart.destroy()
    const chart = document.getElementById("line-chart-year").getContext("2d"),
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
          label: "количество",
          fill: true,
          backgroundColor: gradientRed,
          pointBackgroundColor: "rgba(248, 62, 85, 1)",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 5,
          pointRadius: 5,
          borderWidth: 3,
          borderColor: "rgba(248, 62, 85, 1)",
          data: [
            950, 1040, 1100, 1200, 1300, 1200, 1200, 1100, 1300, 1400, 1500,
            1100,
          ],
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
      scales: {
        yAxis: {
          ticks: {
            stepSize: 300,
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
            drawTicks: false,
            borderDash: [5, 5],
            lineWidth: 1,
            //   color: function(context) {
            //     console.log(context.tick.value);
            //   if (context.tick.value > 0) {
            //     return "rgba(20, 196, 88, 1)";
            //   } else if (context.tick.value < 0) {
            //     return "rgba(248, 62, 85, 1)";
            //   }

            //   return '#000000';
            // },
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
        cornerRadius: 5,
        xPadding: 15,
        yPadding: 15,
        custom: function (tooltipModel) {},
      },
    };
    this.BarChart = new Chart(chart, {
      type: "line",
      data: data,
      options: options,
      plugins: [
        {
          // this is the magical bit :)

          afterDraw: function (c, options) {
            let meta = c.getDatasetMeta(0),
              max;
            c.ctx.save();
            c.ctx.strokeStyle = "rgba(248, 62, 85, 1)";
            c.ctx.lineWidth = 1;
            c.ctx.beginPath();
            meta.data.forEach(function (e) {
              if (
                max == undefined ||
                c.config.data.datasets[0].data[e._index] > max
              ) {
                max = c.config.data.datasets[0].data[e._index];
              }
              c.ctx.moveTo(e.x, meta.yScale.bottom );
              c.ctx.lineTo(e.x, e.y);
            });
            c.ctx.setLineDash([8, 8]);
            c.ctx.stroke();
            c.ctx.restore();
          },
        },
      ],
    });
  },
  beforeDestroy() {
    this.BarChart.destroy()
  },
};
</script>
<style lang="sass">
</style>