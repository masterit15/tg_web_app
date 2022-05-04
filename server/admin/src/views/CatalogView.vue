<template>
  <div class="view_catalog">
    <div class="catalog_head">
    <h3 class="page_title">{{pageNow}}</h3>
    <Filter/>
    <button class="btn_view_all">Все<i class="fa fa-chevron-right" aria-hidden="true"></i></button>
    </div>
  </div>
</template>
<script>
import {} from 'vuex'
import Filter from '@/components/filter/Filter'
export default {
  name: 'Catalog',
  components: {
    Filter
  },
  computed: {
    pageNow(){
      return this.$route.name
    }
  }
}
</script>