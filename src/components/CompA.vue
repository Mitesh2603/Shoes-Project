<script>
import { store } from "./store.js";

export default {
  data() {
    return {
      store,
    };
  },
  // methods: {
  //   computed: {
  //     ...mapState("some/nested/module", {
  //       a: (state) => state.a,
  //       b: (state) => state.b,
  //     }),
  //     ...mapGetters("some/nested/module", [
  //       "someGetter", // -> this.someGetter
  //       "someOtherGetter", // -> this.someOtherGetter
  //     ]),
  //   },
  //   methods: {
  //     ...mapActions("some/nested/module", [
  //       "foo", // -> this.foo()
  //       "bar", // -> this.bar()
  //     ]),
  //   },
  // },
};
</script>

<template>
  <div>
    <button @click="store.dispatch('incrementIfOddOnRootSum')">Button</button>
    <button @click="store.commit('increment')">
      From A Increment 1: {{ store.state.count }}</button
    ><br /><br />
    <button @click="store.dispatch('increment')">
      From A Increment 1 Actions: {{ store.state.count }}</button
    ><br /><br />
    <button @click="store.commit({ type: 'increments', amount: 5 })">
      From A Increment Amount: {{ store.state.count }}</button
    ><br />
    <!-- {{ store.dispatch("incrementAsync", { amount: 10 }) }} -->
    {{ store.dispatch("actionA").then(() => {}) }}
  </div>
</template>
