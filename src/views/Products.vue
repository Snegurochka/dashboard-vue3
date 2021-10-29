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
    <button @click="loadmore" v-if="!products.products_end">Load more</button>
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
  methods: {
    loadmore() {
      this.$store.dispatch("setProducts");
    },
  },
});
</script>

<style>
</style>
