<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <table>
            <div class="fname">
              <slot name="fname">
                <label>First Name : </label>
                <input
                  class="form-field"
                  type="text"
                  placeholder="First Name"
                  id="fname"
                  v-model="fname"
              /></slot>
            </div>
            <br />
            <div class="lname">
              <slot name="lname"
                ><label>Last Name : </label
                ><input
                  class="form-field"
                  type="text"
                  placeholder="Last Name"
                  id="lname"
                  v-model="lname"
              /></slot>
            </div>
            <br />
            <div class="number">
              <slot name="number"
                ><label>Number : </label
                ><input
                  class="form-field"
                  type="number"
                  placeholder="Number"
                  id="number"
                  v-model="number"
              /></slot>
            </div>
            <br />
            <div class="email">
              <slot name="email"
                ><label>Email : </label
                ><input
                  class="form-field"
                  type="text"
                  placeholder="Email"
                  id="email"
                  v-model="email"
              /></slot>
            </div>
          </table>
          <br />
          <div class="modal-footer">
            <slot name="footer">
              <button class="button" @click="displayContent">
                Submit</button
              ><br /><br />
              <button class="button" @click="$emit('close')">Cancel</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      form: {
        fname: "",
        lname: "",
        number: "",
        email: "",
      },
    };
  },
  methods: {
    displayContent() {
      const NewInformation = {
        First_Name: this.fname,
        Last_Name: this.lname,
        Number: this.number,
        Email: this.email,
      };
      this.$emit("displayData", NewInformation);
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 50px 60px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
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
  width: 100%;
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

.form-field {
  width: 55%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border-radius: 6px;
  -webkit-appearance: none;
  color: var(--input-color);
  border: 1px solid #1899d6;
  transition: border 0.3s ease;
}
</style>
