<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Home from "./components/CRUD/Home.vue";
import Modal from "./components/CRUD/Modal.vue";
export default {
  name: "App",
  components: {
    Home,
    Modal,
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
