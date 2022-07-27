<script>
import { store } from "./store.js";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      store,
    };
  },
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  // },
  methods: {
    reduceCount() {
      this.$store.commit("reduceCount");
    },
  },
};
</script>

<template>
  <div>
    <!-- <h3>This is count : {{ count }}</h3>
    <button @click="reduceCount">Reduce Count</button>
    <br /><br /> -->
    <button @click="store.commit('increment')">
      From B Increment 1 : {{ store.state.count }}</button
    ><br /><br />
    <button @click="store.commit({ type: 'increments', amount: 10 })">
      From B Increment Amount: {{ store.state.count }}
    </button>
  </div>
</template>
