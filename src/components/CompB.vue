<script>
import { store } from "./store.js";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    ...mapMutations(["increment"]),
  },
};
</script>

<template>
  <div>
    <button @click="store.commit('increment')">
      From B Increment 1 : {{ store.state.count }}</button
    ><br /><br />
    <button @click="store.commit({ type: 'increments', amount: 10 })">
      From B Increment Amount: {{ store.state.count }}
    </button>
  </div>
</template>
