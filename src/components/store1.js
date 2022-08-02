import { createStore } from "vuex";

export const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    reduceCount() {
      console.log("Reduce Count");
      this.state.count--;
    },
  },
});
