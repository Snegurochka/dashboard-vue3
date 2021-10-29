<template>
  <div class="wrapper">
    <span>{{ product.id }}</span>
    <span>{{ product.title }}</span>
    <span>{{ product.price }}$</span>
    <span>{{ product.quantity }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductItem",
  props: {
    product: Object,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: 60px 1fr 60px 60px 120px;
  gap: 8px;
  padding: 14px;
  text-align: left;
}
</style>
