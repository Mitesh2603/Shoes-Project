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
  <Helloworld /> 
  <hello msg="I'm Mitesh"/>
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

<style scoped>
header {
  padding: 20px 5px;
}
</style>
