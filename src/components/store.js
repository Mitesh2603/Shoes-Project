import { createStore } from "vuex";
import { SOME_MUTATION } from "./mutation-types";

const moduleA = {
  state: {
    count: 0,
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
    reduceCount: (state) => {
      setTimeout(function () {
        state.count -= count;
      }, 3000);
    },
  },
  actions: {
    increment(state) {
      state.commit("increment");
    },
    incrementIfOddOnRootSum({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit("increment");
      }
    },
  },
};

const moduleB = {
  foo: {
    namespaced: true,

    getters: {
      someGetter(state, getters, rootState, rootGetters) {
        getters.someOtherGetter; // -> 'foo/someOtherGetter'
        rootGetters.someOtherGetter; // -> 'someOtherGetter'
        rootGetters["bar/someOtherGetter"]; // -> 'bar/someOtherGetter'
      },
      someOtherGetter: (state) => {
        "...";
      },
    },
    actions: {
      someAction({ dispatch, commit, getters, rootGetters }) {
        getters.someGetter; // -> 'foo/someGetter'
        rootGetters.someGetter; // -> 'someGetter'
        rootGetters["bar/someGetter"]; // -> 'bar/someGetter'

        dispatch("someOtherAction"); // -> 'foo/someOtherAction'
        dispatch("someOtherAction", null, { root: true }); // -> 'someOtherAction'

        commit("someMutation"); // -> 'foo/someMutation'
        commit("someMutation", null, { root: true }); // -> 'someMutation'
      },
      someOtherAction(ctx, payload) {
        "...";
      },
    },
  },
  state: {
    count: 0,
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
  },
  getters: {
    donoTodos(state) {
      return state.todos.filter((todo) => todo.done);
    },
  },
  actions: {
    actionA({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("increment");
          resolve();
        }, 1000);
      });
    },
    reduceCount({ commit }) {
      setTimeout(function () {
        commit("reduceCount");
      }, 3000);
    },
  },
};

export const store = createStore({
  modules: {
    a: moduleA,
    b: moduleB,
  },
});

store.state.a;
store.state.b;
store.commit("increment");
// store.dispatch('actionA').then(() => {})
store.dispatch("reduceCount");
