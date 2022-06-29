<template>
  <center>
    <!-- <div v-html="msg"></div> -->
    <h1 class="text-red-600 text-2xl">
      {{ msg }}
    </h1>
    <button v-on:click="hello">Start</button><br /><br />

    <!-- <form @submit.prevent="hello">Prevent Default</form> -->
    <button class="text-grey-200 hover:text-grey-600" @click="hello">Start</button>

    <!-- Javascript Expressions --> 
    <h1>{{ 56589 + 2565.165 }}</h1>
    <h1>{{ ok ? "YES" : "NO" }}</h1>
    <!-- <h1>
      {{ msg.split("").reverse().join(",") }}
    </h1> -->

    <button @click="mutateDeeply">Count is : {{ obj.nested.count }}</button
    ><br />
    <div @click="mutateDeeply">Array is = {{ obj.arr }}</div>
  </center>
</template>

<script lang="ts">
export default {
  data() {
    return {
      obj: {
        nested: { count: 0 },
        arr: ["foo", "bar"],
      },
    };
  },
  // methods: {
  //   mutateDeeply() {
  //     this.obj.nested.count++;
  //     this.obj.arr.push("baz");
  //   },
  // },
  // props: {
  //   msg: String,
  // },
  methods: {
    hello() {
      alert("On:Click Button Pressed");
    },
  },
};
</script>