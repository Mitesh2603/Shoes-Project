<template>
  <h1 class="text-3xl font-serif">Increse Volume (0-20)</h1>
  <h1 class="text-2xl font-serif">Volume is {{ volume }}</h1>
  <br />
  <button
    class="border-solid border-2 border-black font-serif"
    @click="volume += 2"
  >
    Increase
  </button>
  <button
    class="border-solid border-2 border-black font-serif"
    @click="volume -= 2"
  >
    Decrease</button
  ><br /><br />
  <input class="border-solid border-2 border-black" v-model="movie" />
  <input class="border-solid border-2 border-black" v-model="movieInfo.title" ref="inputRef"/>
  <input class="border-solid border-2 border-black" v-model="movieInfo.actor" />
  <div>
    <button @click="movieList.push('Hulk')">Add Movie</button>
  </div>
  <!-- <div v-html="msg"></div>
    <h1 class="text-red-600 text-2xl">
      {{ msg }}
    </h1>
    <button v-on:click="hello">Start</button><br /><br />

    <form @submit.prevent="hello">Prevent Default</form>
    <button class="text-grey-200 hover:text-grey-600" @click="hello">Start</button>

    Javascript Expressions 
    <h1>{{ 56589 + 2565.165 }}</h1>
    <h1>{{ ok ? "YES" : "NO" }}</h1>
    <h1>
      {{ msg.split("").reverse().join(",") }}
    </h1>

    <button @click="mutateDeeply">Count is : {{ obj.nested.count }}</button
    ><br />
    <div @click="mutateDeeply">Array is = {{ obj.arr }}</div> -->
</template>

<script lang="ts">
export default {
  name: 'templateRef',
  mounted(){
    this.$refs.inputRef.focus();
  },
  data() {
    return {
      volume: 0,
      movie: "Iron Man",
      movieInfo: {
        title: "",
        actor: "",
      },
      movieList: ["Iron Man", "Thor"],
      // obj: {
      //   nested: { count: 0 },
      //   arr: ["foo", "bar"],
      // },
    };
  },
  watch: {
    volume(newValue, oldValue) {
      if (newValue > oldValue && newValue === 16) {
        alert("Volume is Too High");
      }
    },
    movie: {
      handler(newValue) {
        console.log(`Calling movie name with API call = ${newValue}`);
      },
      immediate: true,
    },
    movieInfo: {
      handler(newValue) {
        console.log(
          `Movie Title = ${newValue.title} Actor = ${newValue.actor}`
        );
      },
      deep: true,
    },
    movieList:{
      handler(newValue){
        console.log(`Updated movie ${newValue}`);
        
      },
      deep: true
    }
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
