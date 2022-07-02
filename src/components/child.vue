<template>
  <input
    class="border-solid border-2 border-black font-serif"
    type="text"
    :value="msg"
    @input="changeMessage"
  />
  <p>{{ message }}</p>
</template>

<script>
export default {
  props: ["msg"],
  data() {
    return {
      message: "",
    };
  },
  methods: {
    changeMessage(event) {
      this.message = event.target.value;
      this.$emit("messageChanged", this.message);
    },
  },
};
</script>
