<template>
  <div id="app">
    <section class="wrapper">
      <SideBar></SideBar>
      <router-view />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SideBar from "./components/SideBar.vue";

export default defineComponent({
  name: "App",

  components: {
    SideBar,
  },
});
</script>

<style lang="scss">
:root {
  --maxWidth: 1280px;
  --white: #fff;
  --lightGrey: #dedede;
  --lightBlue: #dbeafe;
  --darkGrey: #3f4d67;
  --primary: #80ceca;
  --primary-hover: #40a6a0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  display: grid;
  grid-template-columns: 235px 1fr;

  h1 {
    font-weight: 600;
    font-size: 40px;
    margin: 0;
  }
}
</style>
