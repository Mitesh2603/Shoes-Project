<template>
  <header>
    <img
      alt="Vue logo"
      class="logo mb-5 text-red-100"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
  </header>
  <Helloworld msg="Welcome to Vue" />
  <hello />
</template>

<script lang="ts">
import Helloworld from "./components/Helloworld.vue";
import Hello from "./components/Hello.vue";
export default {
  components: {
    Hello,
    Helloworld,
  },
};
</script>
