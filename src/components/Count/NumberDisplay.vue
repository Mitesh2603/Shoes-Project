<template>
  <div>
    <h2>{{ getNumbers }}</h2>
  </div>
</template>

<script>
import { store } from "./store.js";
export default {
  name: "NumberDisplay",
  computed: {
    getNumbers() {
      return store.getters.getNumbers;
    },
  },
};
</script>
