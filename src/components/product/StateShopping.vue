<template>
  <!-- <Cart
    v-for="(item, index) in cart"
    @click="removeItem(index, item)"
    :key="index"
    :id="item.id"
    :name="item.name"
    :image="item.image"
    :price="item.price"
  /> -->
  <h1>CART</h1>
  <div v-for="(item, index) in cart">
    <div class="layout">
      <span class="title">
        <div class="name">
          {{ item.name }}
        </div>
        <div class="content">
          <div><img :src="item.image" height="100" /></div>
          <span class="price">{{ " Rs. " + item.price }}</span>
          <div>
            <button class="removeBtn" @click="removeItem(index, item)">
              Remove Item
            </button>
          </div>
        </div>
      </span>
    </div>
  </div>
  <router-link to="/StateProduct">Back To Shopping</router-link>
</template>

<script>
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
      console.log(index);
      store.dispatch("removeItem", index);
    },
  },
};
</script>

<style scoped>
.removeBtn {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;
}
.removeBtn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.layout {
  margin-top: 4%;
  margin-bottom: 4%;
  width: 100%;
}
.title {
  width: 300px;
  margin: 2px;
  display: inline-block;
  vertical-align: top;
  border: 1px solid;
}
.content {
  color: red;
  font-weight: bolder;
}
.name {
  font-size: 20px;
}
</style>
