<template>
  <button @click="addCounter()">Add</button>
</template>

<script>
import store from "./store";
import * as type from "./types";

export default {
  methods: {
    addCounter() {
      store.dispatch({
        // type: "increment",
        type: type.Increment,
        amount: 10,
      });
    },
  },
};
</script>
