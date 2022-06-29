<template>
  <link href="/dist/output.css" rel="stylesheet" />
  <center>
    <h1 class="text-4xl p-2">Toggle Button</h1>
    <button
      :class="[
        isActive ? 'p-2 bg-green-500' : 'p-2 bg-red-500',
        'border-solid border-2 border-black p-4 inline-block rounded-2xl',
      ]"
      @click="toggle"
    >
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
