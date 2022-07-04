<!-- <template>
    <button class="border-solid border-2 border-black p-4 inline-block rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-500">
        <slot>Submit</slot>
    </button>
</template> -->

<!-- <template>
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template> -->

<template>
  <h1 v-for="name in names" :key="name.firstName">
    <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
  </h1>
</template>

<script>
export default {
  name: "FancyButton",
  data() {
    return {
      names: [
        {
          firstName: "Mitesh",
          lastName: "Makwana",
        },
        {
          firstName: "Chris",
          lastName: "Heimsworth",
        },
        {
          firstName: "Tony",
          lastName: "Stark",
        },
      ],
    };
  },
};
</script>
