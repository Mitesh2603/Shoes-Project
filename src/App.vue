<template>
  <div class="container">
    <Counter /><br />
    <div class="columns">
      <div class="column is-11">
        <AddCounter></AddCounter>
      </div>
      <div class="column auto">
        <RemoveCounter></RemoveCounter>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import Counter from "./components/Counter/Counter.vue";
import AddCounter from "./components/Counter/AddCounter.vue";
import RemoveCounter from "./components/Counter/RemoveCounter.vue";

export default {
  name: "App",
  components: {
    Counter,
    AddCounter,
    RemoveCounter,
  },
};
</script>

<style scoped>
div {
  margin-top: 10px;
  margin-left: 10%;
  margin-right: 10%;
}
</style>
