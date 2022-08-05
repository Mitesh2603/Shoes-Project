<template>
  <section>
    <div>
      <div>
        <BlogContent
          title="Introduction to CSS"
          content="CSS is a stylesheet language used to style the structure of our document"
          @displayData="fetchData($event)"
        />
      </div>
      <div>
        <BlogContent
          title="What is $Emit in Vue Js"
          content="Vue $emit is a function that lets us emit, or send, custom events "
          @displayData="fetchData($event)"
        />
      </div>
      <div>
        <BlogContent
          title="Understanding Currying"
          content="Currying simply means evaluating functions with multiple arguments"
          @displayData="fetchData($event)"
        />
      </div>
    </div>
    <h4>Result: {{ result }}</h4>
  </section>
</template>

<script>
import BlogContent from "./BlogContent.vue";
export default {
  name: "BlogPage",
  components: {
    BlogContent,
  },
  data() {
    return {
      result: "",
    };
  },
  methods: {
    fetchData(data) {
      this.result = data;
    },
  },
};
</script>
