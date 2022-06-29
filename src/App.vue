<template>
  <center>
    <header>
      <img
        alt="Vue logo"
        class="logo mb-5 text-red-100"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
    </header>
  </center>
  <Task />
  <!-- <Helloworld /> -->
  <!-- <hello /> -->
</template>

<script lang="ts">
import Helloworld from "./components/Helloworld.vue";
import Hello from "./components/Hello.vue";
import Task from "./components/Task.vue"
export default {
  components: {
    Task,
    Hello,
    Helloworld,

  },
};
</script>

<style scoped>
header {
  padding: 20px 5px;
}
</style>
