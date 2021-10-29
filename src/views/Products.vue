<template>
  <section>
    <h3>Products</h3>
    <div class="products__list">
      <ProductItem
        class="product__item"
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      >
      </ProductItem>
    </div>
  </section>
</template>

<script lang="ts">
import ProductItem from "../components/ProductItem.vue";
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "Products",
  components: { ProductItem },
  created() {
    this.$store.dispatch("setProducts");
  },
  computed: {
    ...mapState(["products"]),
  },
});
</script>

<style>
</style>
