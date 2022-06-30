<template>
  <link href="/dist/output.css" rel="stylesheet" />
  <center>
    <form @submit="checkForm">
      <p>Name : {{ name }}</p>
      <input
        class="border-solid border-2 border-black p-2 inline-block rounded-2xl"
        type="text"
        placeholder="Enter Your Name"
        v-model="name"
        required
      />
      <p v-if="name === ' '">Name Must required</p>
      <br /><br />

      <p>City : {{ city }}</p>
      <input
        class="border-solid border-2 border-black p-2 inline-block rounded-2xl"
        type="text"
        placeholder="Enter Your City Name"
        v-model="city"
        required
      /><br /><br />

      <p>Number : {{ number }}</p>
      <input
        class="border-solid border-2 border-black p-2 inline-block rounded-2xl"
        type="number"
        placeholder="Enter Your Number"
        v-model="number"
        required
      />
      <p v-if="number > 10 && number < 10">Number Must be 10 digits</p>
      <br /><br />

      <div>Gender : {{ gender }}</div>
      <input
        name="gender"
        type="radio"
        id="male"
        value="Male "
        v-model="gender"
        required
      />
      <label for="male">Male </label>
      <input
        name="gender"
        type="radio"
        id="female"
        value="Female "
        v-model="gender"
        required
      />
      <label for="female">Female</label><br /><br />

      <p>Address : {{ address }}</p>
      <textarea
        class="border-solid border-2 border-black p-2 inline-block rounded-2xl"
        v-model="address"
        placeholder="Address"
        required
      ></textarea
      ><br /><br />

      <p>Email : {{ email }}</p>
      <input
        class="border-solid border-2 border-black p-2 inline-block rounded-2xl"
        v-model="email"
        placeholder="Enter Your Email"
        type="text"
        @blur="validateEmail"
        required
      /><br /><br />

      <button
        class="border-solid border-2 border-black p-2 inline-block rounded-2xl bg-green-500 hover:bg-green-600"
        type="submit"
        id="submit"
      >
        Submit
      </button>
    </form>

    <!-- <h1 class="text-4xl p-2">Toggle Button</h1>
    <button
      :class="[
        isActive ? 'p-2 bg-green-500' : 'p-2 bg-red-500',
        'border-solid border-2 border-black p-4 inline-block rounded-2xl',
      ]"
      @click="toggle"
    >
      {{ isActive ? "Green" : "Red" }}
    </button> -->
  </center>
</template>

<script lang="ts">
import { required, email, minLength } from "@vuelidate/validators";

export default {
  data() {
    return {
      name: "",
      city: "",
      number: null,
      gender: null,
      address: "",
      email: null,
    };
  },
  methods: {
    checkForm: function () {
      this.errors = [];
      if (!this.validEmail(this.email)) {
        alert("Valid email required.");
      }
      if (!this.numberValid(this.number)) {
        alert("Number must be 10 Digits");
      }
      if (this.validEmail(this.email) && this.numberValid(this.number)) {
        alert("Form Submitted Successfully");
      }
    },
    numberValid: function(number){
      let num = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      return num.test(number)
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    // data() {
    //   return {
    //     isActive: false,
    //   };
    // },
    // methods: {
    //   toggle() {
    //     this.isActive = this.isActive ? false : true;
    //   },
    // },
  },
};
</script>
