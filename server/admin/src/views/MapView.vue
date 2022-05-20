<template>
<div class="map">
      <div class="catalog_list csll">
        <div class="catalog_list_item vert" v-for="item in items" :key="item.id">
          <span class="catalog_list_item_status"><i class="fa fa-fire"></i></span>
          <router-link :to="{ path: `/detail/${item.id}`}" class="catalog_list_item_media">
            <img :src="item.img" alt="" class="catalog_list_item_media" />
          </router-link>
          <div class="catalog_list_item_content">
            <router-link :to="{ path: `/detail/${item.id}`}" >
              <h3 class="catalog_list_item_title">{{item.title}}</h3>
            </router-link>
            <p class="catalog_list_item_desc">{{item.description}}</p>
            <div class="catalog_list_item_footer">
              <h2 class="catalog_list_item_price"><i class="fa fa-rub"></i> {{item.price}}</h2>
              <span class="catalog_list_item_weight">{{calcWeight(item.weight)}}</span>
              <div class="catalog_list_item_action">
                <span class="catalog_list_item_action_bay minus" @click="bayCount($event, 'minus', item)"><span></span></span>
                <input
                  type="text"
                  name="count"
                  class="catalog_list_item_action_bay_count"
                />
                <span class="catalog_list_item_action_bay plus" @click="bayCount($event, 'plus', item)"><span></span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    <yandex-map
    :settings="settings"
    :coords="centerCoords"
    :zoom="10"
    @map-was-initialized="mapCreated"
    :controls="[]"
  >
  <ymap-marker 
      marker-id="123" 
      :coords="coords"
      :properties="properties"
      :icon="markerIcon"
      @mouseenter="enterToMarker($event)"
      @mouseleave="leaveToMarker($event)"
      :balloon-template="balloonTemplate"
    />
  </yandex-map>
</div>

</template>
<script>
import { yandexMap, ymapMarker, loadYmap } from "vue-yandex-maps";
import mixins from '@/mixins'
import {mapGetters} from 'vuex'
const settings = {
  apiKey: "77b16aec-e9a9-4530-952b-64b60ec60cb2",
  lang: "ru_RU",
  coordorder: "latlong",
  enterprise: false,
  version: "2.1",
};
export default {
  mixins: [mixins],
  data() {
    return {
      settings: settings,
      centerCoords: [43.024616, 44.681771],
      coords: [43.024616, 44.681771],
      properties: {
        id: 13223,
        name: 'zalupa'
      },
      markerIcon: {
        name: 'pfkegf',
        layout: 'default#imageWithContent',
        imageHref: '5646',
        imageSize: [20, 20],
        imageOffset: [0, 0],
        content: '',
        contentOffset: [0, 0],
        contentLayout: `<div class="main_map_marker">$[properties.iconContent]</div>`
      }
    };
  },
  async mounted() {
    await loadYmap({ ...settings, debug: true });
  },
  computed: {
    ...mapGetters(['products']),
    items(){
      return this.products
    },
    balloonTemplate() {
      return `
        <h1 class="red">$[properties.name]</h1>
        <p>I am here: ${this.coords}</p>
        <pre></pre>
      `
    }
  },
  methods: {
    enterToMarker(e){
      console.log('enterToMarker');
      document.querySelector('.main_map_marker').classList.add('active')
    },
    leaveToMarker(e){
      console.log('leaveToMarker');
      document.querySelector('.main_map_marker').classList.remove('active')
    },
    mapCreated($map) {
      var multiRoute = new ymaps.multiRouter.MultiRoute(
        {
          // Точки маршрута. Точки могут быть заданы как координатами, так и адресом.
          referencePoints: [
            "Владикавказ, ул Галковского 233",
            "Владикавказ, ул Ватутина 2",
          ],
        },
        {
          // Автоматически устанавливать границы карты так,
          // чтобы маршрут был виден целиком.
          boundsAutoApply: true,
        }
      );
      // $map.geoObjects.add(multiRoute);
    },
  },
  components: { yandexMap, ymapMarker },
};
</script>
<style lang="sass">
.ymap-container
  width: 100%
  height: 100%
  max-height: 900px
.ymaps-2-1-79-ground-pane
  filter: invert(100%) grayscale(80%) brightness(80%)
</style>