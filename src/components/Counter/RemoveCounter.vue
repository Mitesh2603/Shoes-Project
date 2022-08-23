<template>
  <button @click="removeCounter()">Remove</button>
</template>

<script>
import store from "./store.js";
import * as type from "./mutationTypes/types";

export default {
  methods: {
    removeCounter() {
      store.dispatch({
        type: type.decrement,
        amount: 10,
      });
    },
  },
};
</script>
