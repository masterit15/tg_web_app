<template>
  <div class="home">
    <div class="first_screen" :style="{backgroundImage: `url(${images})`}"></div>
  <div class="actions_btn">
    <button class="btn menu_btn">Меню</button>
    <button class="btn oficiant_btn">Позвать официанта</button>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  data() {
    return {
      images: require('../assets/first_screen.jpg') 
    }
  },
  mounted() {

  },
};
</script>
