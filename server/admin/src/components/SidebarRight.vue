<template>
  <aside id="sidebar_right">
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
  </aside>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import mixins from '@/mixins'
export default {
  mixins: [mixins],
  computed: {
    ...mapGetters(['products']),
    items(){
        return this.products
    }
  },
}
</script>