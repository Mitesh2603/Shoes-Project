<template>
  <!-- <input
    class="border-solid border-2 border-black font-serif"
    type="text"
    :value="msg"
    @input="changeMessage"
  /> -->
  <p>{{ message }}</p>
  <!-- <span>{{ name }} fan of {{ heroName }}</span> -->
  <p> {{ title }}</p>
  <p>Total Likes - {{ likes }}</p>
  <p>Released - {{ isReleased ? "Yes" : "No" }}</p>
</template>

<script>
export default {
  // props: ["msg", "name", "heroName"],
  props: {
    title : {
      type: String,
      required: true,
      default: "Movie Name"
    },
    likes: Number,
    isReleased : Boolean,
  },
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
