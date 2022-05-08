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
    var multiRoute = new ymaps.multiRouter.MultiRoute({   
    // Точки маршрута. Точки могут быть заданы как координатами, так и адресом. 
    referencePoints: [
        'Владикавказ, ул Галковского 233',
        'Владикавказ, ул Ватутина 2',
        ]
    }, {
          // Автоматически устанавливать границы карты так,
          // чтобы маршрут был виден целиком.
          boundsAutoApply: true
    });
   ymaps.geoObjects.add(multiRoute);
  },
  components: { yandexMap, ymapMarker },
};
</script>
<style lang="sass">
.ymap-container
  width: 100%
  height: 100%
</style>