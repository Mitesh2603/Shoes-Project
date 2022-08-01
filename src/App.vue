<template>
  <center>
    <div>
      <router-view />
    </div>
  </center>
</template>

<script lang="ts">
import Home from "./components/product/StateProduct.vue";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style scoped>
div {
  margin-top: 10px;
  margin-left: 30%;
  margin-right: 30%;
}
</style>
