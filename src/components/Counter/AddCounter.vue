<template>
  <button @click="addCounter()">Add</button>
</template>

<script>
import store from "./store.js";
import * as type from "./mutationTypes/types";

export default {
  methods: {
    addCounter() {
      store.dispatch({
        type: type.increment,
        amount: 10,
      });
    },
  },
};
</script>
