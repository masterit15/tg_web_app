<template>
  <div class="page view_catalog">
    <div class="catalog_head">
      <div class="catalog_head_start">
        <h3 class="page_title">{{ pageNow }}</h3>
        <button class="btn_filter" @click="isShow = !isShow">
          <i class="fa fa-sliders" aria-hidden="true"></i>
        </button>
      </div>
      <div class="catalog_head_mid">
        <Filter v-show="isShow" v-on:back-params="filtered" />
      </div>
      <div class="catalog_head_start">
        <button class="btn_view_all">
          Все<i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="catalog_list">
      <div class="catalog_list_item" v-for="item in items" :key="item.id">
        <span class="catalog_list_item_status"><i class="fa fa-fire"></i></span>
        <img :src="item.img" alt="" class="catalog_list_item_media" />
        <div class="catalog_list_item_content">
          <h3 class="catalog_list_item_title">{{item.title}}</h3>
          <p class="catalog_list_item_desc">{{item.description}}</p>
          <div class="catalog_list_item_footer">
            <h2 class="catalog_list_item_price"><i class="fa fa-rub"></i> {{item.price}}</h2>
            <div class="catalog_list_item_action">
              <span class="catalog_list_item_action_bay minus" @click="bayCount($event, 'minus', item)">&minus;</span>
              <input
                type="text"
                name="count"
                class="catalog_list_item_action_bay_count"
              />
              <span class="catalog_list_item_action_bay plus" @click="bayCount($event, 'plus', item)">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
import Filter from "@/components/filter/Filter";
import mixins from '@/mixins/'
export default {
  mixins: [mixins],
  name: "Catalog",
  data() {
    return {
      isShow: false,
      filterParams: {},
    };
  },
  components: {
    Filter,
  },
  computed: {
    ...mapGetters(['products']),
    items(){
      if(this.filterParams.name){
        return this.products.filter(p=>p.title.toLowerCase().inqludes(this.filterParams.name.toLowerCase()))
      }else{
        return this.products
      }
    }
  },
  methods: {
    filtered(params) {
      this.filterParams = params
      console.log("filtered", params);
    },
  },
};
</script>