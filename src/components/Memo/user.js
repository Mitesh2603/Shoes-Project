import { createStore } from "vuex";

const store = createStore({
  state: {
    name: null,
  },

  getters: {
    name: (state) => (state.name ? state.name : ""),
  },

  mutations: {
    setName(state, name) {
      state.name = name;
    },
  },

  actions: {
    login(context, name) {
      context.commit("setName", name);
    },
  },
});
export default store;
