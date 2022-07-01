<template>
  <center>
    <header class="p-5">
      <img
        alt="Vue logo"
        class="logo mb-5 text-red-100"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
    </header>
      <!-- <div>
        Parent Component
        <button @click="showChild = !showChild">Toggle Child</button>
      </div>
      <Lifecycle v-if="showChild" />
    <h2 class="text-2xl font-serif">
      Full Name- {{ firstName }} {{ lastName }}
    </h2>
    <h2 class="text-2xl font-serif">Computed Full Name- {{ fullName }}</h2>
    <button
      class="border-solid border-2 border-black p-2 inline-block rounded-2xl"
      @click="changeFullName"
    >
      Change fullName
    </button>
    <br /><br />
    <button
      class="border-solid border-2 border-black p-2 inline-block rounded-2xl"
      @click="items.push({ id: 4, title: 'PC', price: 600 })"
    >
      Add Item
    </button>
    <h2 class="text-2xl font-serif">Computed Total - {{ total }}</h2>
    <h2 class="text-2xl font-serif">Method Total - {{ totall() }}</h2>
    <br />

    <template v-for="item in items" :key="item.id">
      <h2 class="text-2xl font-serif" v-if="item.price > 200">
        {{ item.title }} {{ item.price }}
      </h2>
    </template>

    <h2
      class="text-2xl font-serif"
      v-for="item in expensiveItems"
      :key="item.id"
    >
      {{ item.title }} {{ item.price }}
    </h2>

    <input type="text" v-model="country" /> -->
  </center>
  <Child />
  <Parent />
  <!-- <Task /> -->
  <!-- <Hello msg="I'm Mitesh"/> -->
  <!-- <Helloworld /> -->
</template>

<script lang="ts">
import Helloworld from "./components/Helloworld.vue";
import Hello from "./components/Hello.vue";
import Task from "./components/Task.vue";
import Parent from "./components/parent.vue";
import Child from "./components/child.vue";

// import Lifecycle from "./components/Lifecycle.vue";
export default {
  components: {
    Task,
    Hello,
    Helloworld,
    Parent,
    Child,
    // Lifecycle,
  },
  name: "App",
  data() {
  //     showChild: true,
  //     firstName: "Mitesh",
  //     lastName: "Makwana",
  //     items: [
  //       {
  //         id: 1,
  //         title: "TV",
  //         price: 200,
  //       },
  //       {
  //         id: 2,
  //         title: "Fridge",
  //         price: 400,
  //       },
  //       {
  //         id: 3,
  //         title: "Sofa",
  //         price: 600,
  //       },
  //     ],
  //     country: "",
  //   };
  // },
  // methods: {
  //   totall() {
  //     console.log("Method");
  //     return this.items.reduce(
  //       (total, curr) => (total = total + curr.price),
  //       0
  //     );
  //   },
  //   changeFullName() {
  //     this.fullName = "Meet Mak";
  //   },
  // },
  // computed: {
  //   fullName: {
  //     get() {
  //       return `${this.firstName} ${this.lastName}`;
  //     },
  //     set(value) {
  //       const name = value.split(" ");
  //       this.firstName = name[0];
  //       this.lastName = name[1];
  //     },
  //   },
  //   total() {
  //     console.log("Computed");
  //     return this.items.reduce(
  //       (total, curr) => (total = total + curr.price),
  //       0
  //     );
  //   },
  //   expensiveItems() {
  //     return this.items.filter((item) => item.price > 200);
  },
};
</script>
