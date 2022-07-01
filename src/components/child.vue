<template>
  <center>
    <h1 class="text-4xl font-serif">{{ message }}</h1><br />
    <app-input
      class="font-serif"
      :msg="message"
      @messageChanged="message = $event"
    ></app-input><br/>
  </center>
</template>

<script>
import Parent from "./parent.vue";

export default {
  data() {
    return {
      message: "My name is Mitesh!",
    };
  },
  components: {
    "app-input": Parent,
  },
};
</script>
