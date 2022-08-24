<template>
  <button @click="removeCounter()">Remove</button>
</template>

<script>
import store from "./store.js";
import * as type from "./types";

export default {
  methods: {
    removeCounter() {
      store.dispatch({
        // type: "decrement",
        type: type.Decrement,
        amount: 10,
      });
    },
  },
};
</script>
