<template>
  <h1>{{ count }}</h1>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    count(state) {
      if (state.count < 0) {
        state.count = 0;
        return state.count;
      }
      return state.count;
    },
  }),
};
</script>
