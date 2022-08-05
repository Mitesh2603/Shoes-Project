<template>
  <section>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    <button @click="displayContent">See More</button>
  </section>
</template>

<script>
export default {
  name: "BlogContent",
  props: ["title", "content"],
  data() {},
  methods: {
    displayContent() {
      this.$emit("displayData", this.title);
    },
  },
};
</script>
