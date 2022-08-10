import { createStore } from "vuex";

export const store = createStore({
  state: {
    add: {
      firstname: "",
      lastname: "",
      number: "",
      email: "",
    },
    newData: [],
  },
  getters: {
    add: (state) => state.add,
    newData: (state) => state.newData,
  },
  mutations: {
    setFirstname(state, value) {
      state.newData.firstname = value;
    },
    setLastname(state, value) {
      state.newData.lastname = value;
    },
    setNumber(state, value) {
      state.newData.number = value;
    },
    setEmail(state, value) {
      state.newData.email = value;
    },
    removeMember(state, value) {
      state.newData.splice(value, 1);
    },
  },
});
