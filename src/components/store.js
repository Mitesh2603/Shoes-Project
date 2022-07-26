import { createStore } from "vuex";
import { SOME_MUTATION } from "./mutation-types";

export const store = createStore({
  state: {
    count: 0,
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    increments(state, payLoad) {
      state.count += payLoad.amount;
    },
    [SOME_MUTATION](state) {
      state.count++;
    },
  },
  getters: {
    donoTodos(state) {
      return state.todos.filter((todo) => todo.done);
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
});
