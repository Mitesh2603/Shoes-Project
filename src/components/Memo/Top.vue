<template>
  <div>
    <h2>Easy Notepad</h2>
    <form @submit.prevent="login">
      <label for="name">Name</label>
      <div>
        <input
          type="text"
          id="name"
          v-model="nameForm.name"
          placeholder="Name"
        />
      </div>
      <span v-if="error.inValid">Please enter your name</span>
      <div>
        <button type="submit" @click="login()">Use</button>
      </div>
    </form>
  </div>
</template>

<script>
import store from "../../store/user";

export default {
  data() {
    return {
      nameForm: {
        name: "",
      },
      error: {
        inValid: false,
      },
    };
  },
  methods: {
    login() {
      if (this.nameForm.name === "") {
        this.error.inValid = true;
        return;
      } else {
        this.error.inValid = false;
      }
      store.dispatch("login", this.nameForm.name);
      this.$router.push("/memo");
    },
  },
};
</script>

<style scoped>
div {
  padding: 10px;
}
input {
  font-family: "Roboto", sans-serif;
  color: #333;
  font-size: 17px;
  margin: 0 auto;
  padding: 10px 10px;
  border-radius: 1px;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 70%;
  display: block;
  border-bottom: 2.8px solid;
}
</style>
