<template>
  <h1 class="title">Shopping</h1>
  <Cart
    v-for="product in products"
    :id="product.id"
    :name="product.name"
    :image="product.image"
    :price="product.price"
    :key="product.id"
  />
  <router-link class="cart" to="/StateShopping">Go to Cart</router-link>
</template>

<script>
import { store } from "./store.js";
import Cart from "./StateCart.vue";
import Shopping from "./StateShopping.vue";

export default {
  components: {
    Cart,
    Shopping,
  },
  computed: {
    products() {
      return store.getters.products;
    },
  },
};
</script>

<style scoped>
.title {
  max-height: 50vh;
  border: 1px solid rgba(rgb(0, 0, 0), 0.12);
  background: linear-gradient(-90deg, #6a79cf, #1627c0);
  color: #ffffff;
}
.cart {
  font-size: 20px;
}
</style>
