import { createStore } from "vuex";

export const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state, payload) {
      return (state.count = state.count + payload.amount);
    },
    decrement(state, payload) {
      return (state.count = state.count - payload.amount);
    },
  },
  actions: {
    increment(context, payload) {
      context.commit("increment", payload);
    },
    decrement(context, payload) {
      context.commit("decrement", payload);
    },
  },
});
