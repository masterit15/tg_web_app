<template>
    <yandex-map 
    :settings="settings"
    :coords="centerCoords"  
    :zoom="12"  
    :controls="['zoomControl']"
            >
    <!--Markers-->
</yandex-map>
</template>
<script>
import { yandexMap, ymapMarker, loadYmap } from 'vue-yandex-maps'
const settings = {
        apiKey: "77b16aec-e9a9-4530-952b-64b60ec60cb2",
        lang: "ru_RU",
        coordorder: "latlong",
        enterprise: false,
        version: "2.1",
      }
export default {
  data() {
    return {
      settings: settings,
      centerCoords: [43.024616, 44.681771]
    };
  },
  async mounted() {
    await loadYmap({...settings, debug: true})
  },
  components: { yandexMap, ymapMarker },
};
</script>
<style lang="sass">
.ymap-container
  width: 100%
  height: 100%
</style>