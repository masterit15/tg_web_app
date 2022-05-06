<template>
  <div class="page home">
    <div class="statistic_row">
      <div class="statistic_item">
        <div class="statistic_item_head">
          <div class="statistic_item_icon" :style="{backgroundImage: `url(${require('@/assets/drink_neon.svg')})`}"></div>
          <h3 class="statistic_item_title">Напитки</h3>
          <span class="statistic_item_count_percent">+14%</span>
        </div>
        <div class="statistic_item_mid">
        <span class="statistic_item_count">{{83}} <span>заказов</span></span>
        <MiniCart 
        :chart-id="1"
        chart-color="#74D0F7"
        :chart-labels="[4,6,5,2,3,7,3,2,5,1]"
        :chart-data="[4,6,5,2,3,7,3,2,5,1]" 
        chart-title="доход в день" />
        </div>
      </div>
      <div class="statistic_item">
        <div class="statistic_item_head">
          <div class="statistic_item_icon" :style="{backgroundImage: `url(${require('@/assets/burger_neon.svg')})`}"></div>
          <h3 class="statistic_item_title">Еда</h3>
          <span class="statistic_item_count_percent">+21%</span>
        </div>
        <div class="statistic_item_mid">
        <span class="statistic_item_count">{{210}} <span>заказов</span></span>
        <MiniCart 
        :chart-id="2"
        chart-color="#F83E55"
        :chart-labels="[1,3,4,2,5,7,3,4,9,3]"
        :chart-data="[1,3,4,2,5,7,3,4,9,3]" 
        chart-title="доход в день" />
        </div>
      </div>
      <div class="statistic_item">
        <div class="statistic_item_head">
          <div class="statistic_item_icon" :style="{backgroundImage: `url(${require('@/assets/burger_drink_neon_2.svg')})`}"></div>
          <h3 class="statistic_item_title">Сеты</h3>
          <span class="statistic_item_count_percent">+32%</span>
        </div>
        <div class="statistic_item_mid">
        <span class="statistic_item_count">{{7}} <span>заказов</span></span>
        <MiniCart 
        :chart-id="3"
        chart-color="#14C458"
        :chart-labels="[1,3,2,3,5,7,1,2,3,5]"
        :chart-data="[1,3,2,3,5,7,1,2,3,5]" 
        chart-title="доход в день" />
        </div>
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
import MiniCart from '@/components/chart/MiniChart'
import mixins from '@/mixins'
export default {
  mixins: [mixins],
  name: 'Home',
  methods: {
    // ...mapActions([''])
  },
  components:{
    BarChart,
    LineChart,
    MiniCart
  }
}
</script>
