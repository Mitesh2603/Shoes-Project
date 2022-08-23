<template>
  <div>
    <label for="quickSearch">
      <div>
        <input
          icon="close"
          type="text"
          placeholder="Quick Search"
          id="quicksearch"
          name="quicksearch"
          v-model="quickSearch"
          class="fa-solid fa-user"
        />
        <span><font-awesome-icon icon="User" /></span>
      </div>
    </label>
    <label for="username">
      <select
        placeholder="User Name"
        id="username"
        name="username"
        v-model="username"
      >
        <option>Meet</option>
        <option>Mitesh</option>
      </select>
    </label>
    <label for="password">
      <input
        type="password"
        placeholder="Password"
        id="password"
        name="password"
        v-model="password"
      /><font-awesome-icon icon="Lock" />
    </label>
    <label for="search">
      <input
        type="text"
        placeholder="Search"
        id="search"
        name="search"
        v-model="search"
      /><font-awesome-icon icon="MagnifyingGlass" />
    </label>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    quickSearch: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    search: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
label {
  padding: 10px;
  display: block;
}
select {
  width: 100%;
}
input {
  padding: 10px;
}
</style>
