<template>
  <Button @click="reduceCount"> Reduce Count : {{ store.state.count }}</Button>
</template>

<script>
import { store } from "./store1.js";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    reduceCount: () => {
      store.commit("reduceCount");
    },
  },
};
</script>
