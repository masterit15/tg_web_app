<template>
  <div class="view_catalog">
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
      <div class="catalog_list_item">
        <span class="catalog_list_item_status"><i class="fa fa-fire"></i></span>
        <img :src="require('../assets/img/salad.png')" alt="" class="catalog_list_item_media" />
        <div class="catalog_list_item_content">
          <h3 class="catalog_list_item_title">Салат с семгой</h3>
          <p class="catalog_list_item_desc">Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Живет если имени строчка своих.</p>
          <div class="catalog_list_item_footer">
            <h2 class="catalog_list_item_price"></h2>
            <div class="catalog_list_item_action">
              <span class="catalog_list_item_action_delete"></span>
              <input
                type="text"
                name="count"
                class="catalog_list_item_action_count"
              />
              <span class="catalog_list_item_action_add"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {} from "vuex";
import Filter from "@/components/filter/Filter";
export default {
  name: "Catalog",
  data() {
    return {
      isShow: false,
    };
  },
  components: {
    Filter,
  },
  computed: {
    pageNow() {
      return this.$route.name;
    },
  },
  methods: {
    filtered(params) {
      console.log("filtered", params);
    },
  },
};
</script>