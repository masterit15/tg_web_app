<template>
  <nav id="nav">
    <ul>
      <li v-for="item in listItems" :key="item.title">
        <router-link :to="item.href">
          <i :class="'fa ' + item.icon"></i>
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
        { title: "Пользователи", icon: "fa-user", href: "/workers" },
      ],
    };
  },
};
</script>