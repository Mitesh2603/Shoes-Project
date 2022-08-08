<template>
  <div id="app">
    <div>
      <button id="show-modal" class="button" @click="showModal = true">
        Add Information
      </button>
    </div>
    <table>
      <tr>
        <th>First_Name</th>
        <th>Last_Name</th>
        <th>Number</th>
        <th>Email</th>
      </tr>
      <tr>
        <td>{{ result.First_Name }}</td>
        <td>{{ result.Last_Name }}</td>
        <td>{{ result.Number }}</td>
        <td>{{ result.Email }}</td>
      </tr>
    </table>
    <Modal
      v-if="showModal"
      @close="showModal = false"
      @displayData="fetchData($event)"
    >
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  data() {
    return {
      showModal: false,
      result: [],
    };
  },
  components: {
    Modal,
  },
  methods: {
    fetchData(data) {
      this.result = data;
    },
  },
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
}
th {
  padding: 10px;
}

div {
  padding: 5px;
}

.button {
  appearance: button;
  background-color: #1899d6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: din-round, sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter 0.2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 120%;
}

.button:after {
  background-clip: padding-box;
  background-color: #1cb0f6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

.button:main,
.button:focus {
  user-select: auto;
}

.button:hover:not(:disabled) {
  filter: brightness(1.1);
  -webkit-filter: brightness(1.1);
}

.button:disabled {
  cursor: auto;
}
</style>
