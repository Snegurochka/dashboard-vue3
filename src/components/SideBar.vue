<template>
  <div class="sidebar">
    <nav class="navbar">
      <router-link
        v-for="(item, ind) in items"
        :key="ind"
        class="navbar__item"
        :to="{ name: item.route }"
        >{{ item.text }}</router-link
      >
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBar",
  data: () => ({
    selectedItem: 0,
    items: [
      { icon: "fas fa-home", text: "Home", route: "home" },
      { icon: "fas fa-th-large", text: "Profile", route: "profile" },
      { icon: "fas fa-calendar", text: "Products", route: "products" },
    //   { icon: "fas fa-calendar", text: "Orders", route: "orders" },
    ],
  }),
});
</script>

<style>
.sidebar {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: row;
  background: var(--darkGrey);
  box-shadow: 1px 0 20px 0 var(--darkGrey);
  z-index: 99;
}

.navbar {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.navbar__item {
  padding: 14px 24px;
  width: 100%;
  color: honeydew;
  text-decoration: none;
}

.navbar__item:hover {
  color: #1dc4e9;
}

.navbar__item.active {
  color: #1dc4e9;
}
</style>
