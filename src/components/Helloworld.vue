<template>
  <span>Message is :</span>
  <p>{{ message }}</p>
  <textarea v-model="message" placeholder="Message"></textarea><br />

  <input type="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label
  ><br /><br />

  <div>Checked Name is : {{ checkedNames }}</div>
  <input type="checkbox" id="Mitesh" value="Mitesh" v-model="checkedNames" />
  <label for="Mitesh">Mitesh</label>
  <input type="checkbox" id="Rahul" value="Rahul" v-model="checkedNames" />
  <label for="Rahul">Rahul</label>
  <input type="checkbox" id="Ronak" value="Ronak" v-model="checkedNames" />
  <label for="Ronak">Ronak</label><br /><br />

  <div>Picked : {{ picked }}</div>
  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>
  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label><br /><br />

  <div>Selected : {{ selected }}</div>
  <select v-model="selected">
    <option disabled value="">Select One</option>
    <option>A</option>
    <option>B</option>
    <option>C</option></select
  ><br /><br />

  <select v-model="select">
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
    </option>
  </select>
  <p>selected : {{ select }}</p>

  <a class="text-blue-300 hover:text-blue-700 underline" :href="link">
    Introduction Of vue </a
  ><br />
  Vue Directives (Starts WIrh v-)
  <h1 class="text-4xl font-serif" v-bind:id="headingId">Introduction Of Vue</h1>
  <br />

  <div class="text-teal-500 underline font-bold" v-html="msg"></div>
  <br />

  <button
    class="border-solid border-2 border-black p-4 inline-block rounded-2xl bg-green-500"
    :disabled="IsDisabled"
  >
    Bind</button
  ><br />

  <div v-bind:class="isNewPerson && 'text-2xl underline'">New Person</div>

  <div
    :class="[
      isNewPerson && 'text-2xl underline',
      isNew ? 'p-2 text-green-700' : 'p-2 text-red-600',
    ]"
  >
    Array Conditional Person
  </div>

  <div :class="['p-2 text-green-700', 'text-2xl underline']">
    New Person and Old Person
  </div>

  <h1 v-bind:class="isNew ? 'p-2 text-grey-500 font-bold' : 'p-2 text-red-600'">
    New
  </h1>

  <div
    :class="{
      'text-green-900 text-2xl': isNew,
      'text-2xl underline': !isNewPerson,
    }"
  >
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

  <!-- Conditional Rendering  -->
  <h1 class="text-2xl font-serif" v-if="num === 0">Number is Zero</h1>
  <h1 class="text-2xl font-serif" v-else-if="num < 0">Number is Negative</h1>
  <h1 class="text-2xl font-serif" v-else-if="num > 0">Number is Positive</h1>
  <h1 class="text-2xl font-serif" v-else>Not a Number</h1>

  <template v-if="display">
    <h1 class="text-2xl font-serif">Mitesh</h1>
    <h1 class="text-2xl font-serif">Makwana</h1>
  </template>

  <h1 class="text-2xl font-serif" v-show="displayElement">Using v-show</h1>
  <h1 class="text-2xl font-serif" v-if="displayElement">Using v-if</h1>
  <ul>
    <li v-for="(value, key, index) in myObject">
      {{ index }}. {{ key }}: {{ value }}
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  data() {
    return {
      myObject: {
        title: "How to do lists in Vue",
        author: "Mitesh Makwana",
        publishedAt: "29-06-2022",
      },
      // Conditional Redndering
      num: 69,
      display: true,
      displayElement: false,
      link: "https://vuejs.org/guide/introduction.html",

      // Directive Class And ID
      msg: "Welcome to Vue",
      headingId: "Heading",
      IsDisabled: true,
      isNew: true,
      isNewPerson: true,
      color: "blue",
      size: "50px",
      family: "Times New Roman",
      message: "",
      checked: false,
      checkedNames: [],
      picked: "",
      selected: "",
      select: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],

      //   objectOfAttrs: {
      //   id: 'container',
      //   class: 'wrapper'
      // }
    };
  },
};
</script>
