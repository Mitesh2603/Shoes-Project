<template>
  <div>
    <h4>Welcome, {{ name }}</h4>
    <form @submit.prevent="postMemo">
      <label for="memo">Memo</label>
      <div>
        <textarea id="memo" cols="30" rows="10" v-model="memo.text"></textarea>
      </div>
      <span v-if="error.inValid">Please enter your note</span>
      <div>
        <button type="submit">Take notes</button>
      </div>
    </form>
    <MemoList :items="this.memoList" @delete="deleteMemo" />
    <RouterLink to="/">Back to Top</RouterLink>
  </div>
</template>

<script>
import MemoList from "./memoList.vue";
export default {
  components: {
    MemoList,
  },
  computed: {
    name() {
      return this.$store.getters["name"];
    },
  },
  data() {
    return {
      memo: {
        id: null,
        text: "",
      },
      error: {
        inValid: false,
      },
      memoList: {
        memos: [],
      },
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      this.memoList.memos = JSON.parse(localStorage.getItem(this.name)) || [];
    });
  },
  methods: {
    postMemo() {
      if (this.memo.text === "") {
        this.error.inValid = true;
        return;
      } else {
        this.error.inValid = false;
      }
      const text = this.memo.text;
      const memosLength = this.memoList.memos.length;
      this.memoList.memos.push({
        id: memosLength === 0 ? 0 : this.memoList.memos[memosLength - 1],
        text: text,
      });
      this.memo.text = "";
    },
    deleteMemo(memoId) {
      const afterMemos = this.memoList.memos.filter((memo) => {
        return memo.id !== memoId;
      });
      this.memoList.memos = afterMemos;
    },
  },
  watch: {
    memoList: {
      handler(newVal) {
        localStorage.setItem(this.name, JSON.stringify(newVal.memos));
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
div {
  padding: 10px;
}
</style>
