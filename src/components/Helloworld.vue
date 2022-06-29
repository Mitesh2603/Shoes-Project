<template>
  <center>
    <a :href="link"> Introduction Of vue </a><br>
    Vue Directives (Starts WIrh v-)
    <h1 v-bind:id="headingId">Introduction Of Vue</h1>
    <br />

    <div v-html="msg"></div>
    <br />

    <button :disabled="IsDisabled">Bind</button><br />

    <div v-bind:class="isNewPerson && 'newPerson'">New Person</div>

    <div :class="[isNewPerson && 'newPerson', isNew ? 'new' : 'old']">
      Array Conditional Person
    </div>

    <div :class="['new', 'newPerson']">New Person and Old Person</div>

    <h1 v-bind:class="isNew ? 'new' : 'old'">New</h1>

    <div :class="{ new: isNew, newPerson: !isNewPerson }">
      Conditional Class
    </div>

    <div
      :style="{
        color: color,
        fontSize: size,
        fontFamily: family,
      }"
    >
      Styling
    </div>

    <div v-bind="objectOfAttrs"></div>

    Conditional Rendering 
    <h1 v-if="num === 0">Number is Zero</h1>
    <h1 v-else-if="num < 0">Number is Negative</h1>
    <h1 v-else-if="num > 0">Number is Positive</h1>
    <h1 v-else>Not a Number</h1>

    <template v-if="display">
      <h1>Mitesh</h1>
      <h1>Makwana</h1>
    </template>

    <h1 v-show="displayElement">Using v-show</h1>
    <h1 v-if="displayElement">Using v-if</h1>
  </center>
</template>

<script lang="ts">
export default {
  data() {
    return {
      // Conditional Redndering
      num: 69,
      display: true,
      displayElement: false,
      link: "https://vuejs.org/guide/introduction.html",

      // Directive Class And ID
      msg: "<b><u>Welcome to Vue</b></u>",
      headingId: "Heading",
      IsDisabled: false,
      isNew: false,
      isNewPerson: false,
      color: "blue",
      size: "50px",
      family: "Times New Roman",

      //   objectOfAttrs: {
      //   id: 'container',
      //   class: 'wrapper'
      // }
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 30px;
  font-family: "Times New Roman", Times, serif;
}

button {
  border: 1px solid lightgray;
  background-color: lightgray;
}

.newPerson {
  font-size: larger;
  text-decoration: underline;
}

.new {
  color: green;
}

.old {
  color: red;
}
a {
  color: rgb(51, 109, 196);
}
a:hover {
  color: blue;
  text-decoration: underline;
}
</style>
