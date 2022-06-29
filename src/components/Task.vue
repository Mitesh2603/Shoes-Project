<template>
<center>
  <h1>Toggle Button</h1>
  <button :class="[isActive ? 'green' : 'red']" @click="toggle">
    {{ isActive ? "Green" : "Red" }}
  </button>
  </center>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggle() {
      this.isActive = this.isActive ? false : true;
    },
  },
};
</script>

<style scoped>
button {
  border: 2px solid;
  border-radius: 5px;
}
.green {
  background-color: green;
}
.red {
  background-color: red;
}
</style>
