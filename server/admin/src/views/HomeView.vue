<template>
  <div class="page home">
    <div class="statistic_row">
      <div class="statistic_item">
        <h3 class="statistic_item_title">Всего</h3>
        <span class="statistic_item_count"><i class="fa fa-rub"></i>{{numberFormate(3867002)}}</span>
        <span class="statistic_item_count_percent"></span>
      </div>
      <div class="statistic_item">
        <h3 class="statistic_item_title">доход в день</h3>
        <span class="statistic_item_count"><i class="fa fa-rub"></i>{{numberFormate(30347)}}</span>
        <span class="statistic_item_count_percent"></span>
      </div>
      <div class="statistic_item">
        <h3 class="statistic_item_title">заказы в день</h3>
        <span class="statistic_item_count"><i class="fa fa-rub"></i>{{numberFormate(347)}}</span>
        <span class="statistic_item_count_percent"></span>
      </div>
      <div class="statistic_item">
        <h3 class="statistic_item_title">месячнй доход</h3>
        <span class="statistic_item_count"><i class="fa fa-rub"></i>{{numberFormate(389347)}}</span>
        <span class="statistic_item_count_percent"></span>
      </div>
      <div class="statistic_item">
        <h3 class="statistic_item_title">месячные продажи</h3>
        <span class="statistic_item_count"><i class="fa fa-rub"></i>{{numberFormate(347)}}</span>
        <span class="statistic_item_count_percent"></span>
      </div>
      
    </div>
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
import mixins from '@/mixins'
export default {
  mixins: [mixins],
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
