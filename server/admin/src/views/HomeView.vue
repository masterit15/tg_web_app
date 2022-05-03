<template>
  <div class="home">
    <div class="chart_row">
      <BarChart/>
      <LineChart/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from 'vuex'
import BarChart from '@/components/chart/Bar'
import LineChart from '@/components/chart/Line'
export default {
  name: 'Home',
  methods: {
    // ...mapActions([''])
  },
  components:{
    BarChart,
    LineChart
  }
}
</script>
