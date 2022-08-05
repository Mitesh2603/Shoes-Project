<template>
  <div class="layout">
    <span class="title">
      <div class="name">{{ name }}</div>
      <div class="content">
        <div><img :src="image" height="100" /></div>
        <span class="price">{{ " Rs. " + price }}</span>
      </div>
      <button v-if="remove" class="addBtn" @click="addToCart(id)">
        Add To Cart
      </button>
      <button v-else class="removeBtn" @click="removeItem(index, item)">
        Remove From Cart
      </button>
    </span>
  </div>
</template>

<script lang="ts">
import { store } from "./store.js";

export default {
  name: "product",
  props: ["id", "name", "image", "price", "remove"],
  methods: {
    addToCart(id) {
      console.log(id, "Add to cart");
      store.dispatch("addItem", id);
    },
    removeItem() {
      this.$emit("remove");
    },
  },
};
</script>

<style scoped>
.addBtn,
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
.addBtn:hover,
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
