<template>
  <nav id="nav">
    <ul>
      <li v-for="item in listItems" :key="item.title">
        <router-link :to="item.href">
          <i :class="`fa ${item.icon}`"></i>
          <span class="sidebar_item_text">{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      listItems: [
        { title: "Главная", icon: "fa-home", href: "/" },
        { title: "Каталог", icon: "fa-cubes", href: "/catalog" },
        { title: "Карта", icon: "fa-map-marker", href: "/map" },
        { title: "Пользователи", icon: "fa-user", href: "/workers" },
        { title: "Доставки", icon: "fa-truck", href: "/delivered" },
        { title: "Настройки", icon: "fa-sliders", href: "/settings" },
      ],
    };
  },
};
</script>