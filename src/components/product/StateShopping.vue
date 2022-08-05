<template>
  <h1>CART</h1>
  <Cart
    v-for="(item, index) in cart"
    @click="removeItem(index, item)"
    :key="index"
    :id="item.id"
    :name="item.name"
    :image="item.image"
    :price="item.price"
    :remove="false"
  />
  <router-link to="/StateProduct">Back To Shopping</router-link>
</template>

<script lang="ts">
import { store } from "./store.js";
import Cart from "./StateCart.vue";

export default {
  name: "Shopping",
  components: { Cart },
  computed: {
    cart() {
      return store.getters.StoreCart.map((cartItems) => {
        return store.getters.products.find((itemForSale) => {
          return cartItems === itemForSale.id;
        });
      });
    },
  },
  methods: {
    removeItem(index) {
      console.log("Remove From Cart", index);
      store.dispatch("removeItem", index);
    },
  },
};
</script>
