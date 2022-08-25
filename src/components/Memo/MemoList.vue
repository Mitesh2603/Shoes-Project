<template>
  <div>
    <div v-for="item in items.memos" :key="item.id">
      <span class="itemText">{{ item.text }}</span
      ><button @click="emitDelete(item.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: false,
    },
  },
  methods: {
    emitDelete(memoId) {
      this.$emit("delete", memoId);
    },
  },
};
</script>

<style scoped>
div {
  white-space: pre;
}
.itemText {
  padding: 10px;
}
</style>
