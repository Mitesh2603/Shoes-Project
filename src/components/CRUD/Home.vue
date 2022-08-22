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
          <th>Edit / Remove</th>
        </tr>
        <tr v-for="(item, index) in result" :key="item">
          <td>
            <input type="text" v-model="item.firstname" :disabled="disabled" />
          </td>
          <td>
            <input type="text" v-model="item.lastname" :disabled="disabled" />
          </td>
          <td>
            <input type="number" v-model="item.number" :disabled="disabled" />
          </td>
          <td>
            <input type="text" v-model="item.email" :disabled="disabled" />
          </td>
          <td>
            <span
              class="edit"
              v-if="disabled"
              style="cursor: pointer"
              @click="disabled = !disabled"
            >
              <font-awesome-icon icon="fa-pen-to-square"
            /></span>
            <span
              class="edit"
              v-if="!disabled"
              style="cursor: pointer"
              @click="disabled = !disabled"
              ><font-awesome-icon icon="fa-solid fa-check"
            /></span>
            <span
              class="edit"
              style="cursor: pointer"
              @click="removeMember(index, item)"
            >
              <font-awesome-icon icon="fa-xmark" />
            </span>
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
      // this.result.push(data);
      const member = JSON.parse(localStorage.getItem("result"));
      member.push(data);
      localStorage.setItem("result", JSON.stringify(member));
      this.result = JSON.parse(localStorage.getItem("result"));
    },
    removeMember(index) {
      // this.result.splice(index, 1);
      const member = JSON.parse(localStorage.getItem("result"));
      member.splice(index, 1);
      localStorage.setItem("result", JSON.stringify(member));
      this.result = JSON.parse(localStorage.getItem("result"));
    },
    getCart() {
      if (!localStorage.getItem("result")) {
        localStorage.setItem("result", JSON.stringify([]));
      }
      this.result = JSON.parse(localStorage.getItem("result"));
    },
  },
  beforeMount() {
    this.getCart();
  },
};
</script>

<style scoped>
input {
  text-align: center;
  padding: auto;
}
.delete,
.edit {
  padding: 10px;
}
table {
  border: 1px solid;
  width: 100%;
  border-radius: 10px;
  padding: 25px 30px;
  justify-content: space-between;
}
th {
  background-color: #95a5a6;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  padding: 10px;
}
td {
  text-align: center;
  padding: 8px;
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
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
  width: 20%;
  margin-left: 41%;
  margin-right: 45%;
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
