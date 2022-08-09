<template>
  <div id="app">
    <div>
      <button id="show-modal" class="button" @click="showModal = true">
        Add Information
      </button>
    </div>
    <div>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Number</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr v-for="(item, index) in result" :key="item">
          <td>
            <input
              type="text"
              :v-model="item.firstname"
              :value="item.firstname"
              :disabled="disabled"
            />
          </td>
          <td>
            <input
              type="text"
              :v-model="item.lastname"
              :value="item.lastname"
              :disabled="disabled"
            />
          </td>
          <td>
            <input
              type="text"
              :v-model="item.number"
              :value="item.number"
              :disabled="disabled"
            />
          </td>
          <td>
            <input
              type="text"
              :v-model="item.email"
              :value="item.email"
              :disabled="disabled"
            />
          </td>
          <td
            style="cursor: pointer"
            @click="
              editMember(index, item);
              disabled = !disabled;
            "
          >
            Edit
          </td>
          <td style="cursor: pointer" @click="removeMember(index, item)">
            Delete
          </td>
        </tr>
      </table>
    </div>
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
      disabled: true,
    };
  },
  components: {
    Modal,
  },
  methods: {
    fetchData(data) {
      this.result.push(data);
    },
    removeMember(index) {
      this.result.splice(index, 1);
    },
    editMember(data) {
      this.showModal = true;
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
