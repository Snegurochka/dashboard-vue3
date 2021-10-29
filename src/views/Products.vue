<template>
  <div>Products</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";


export default defineComponent({
  name: "Products",
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
