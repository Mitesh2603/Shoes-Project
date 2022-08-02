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

<!-- <template>
  <div id="app">
    <NumberDisplay />
    <NumberSubmit />
  </div>
</template>

<script>
import NumberDisplay from "./components/Count/NumberDisplay.vue";
import NumberSubmit from "./components/Count/NumberSubmit.vue";

export default {
  name: "App",
  components: {
    NumberDisplay,
    NumberSubmit,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
