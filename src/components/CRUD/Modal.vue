<template>
  <Transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <form
          @submit.prevent="
            displayContent();
            $emit('close');
          "
        >
          <div class="modal-container">
            <div class="studentInfo">Student Information</div>
            <div class="input">
              <div class="firstname">
                <label for="firstname">First Name : </label>
                <input
                  class="form-field"
                  type="text"
                  placeholder="First Name"
                  id="firstname"
                  v-model="firstname"
                  v-validate="required"
                  name="firstname"
                  :class="{
                    'is-invalid': submitted && error.has('firstName'),
                  }"
                />
                <div
                  v-if="submitted && error.has('firstName')"
                  class="invalid-feedback"
                >
                  {{ error.first("firstName") }}
                </div>
              </div>
              <br />
              <div class="lastname">
                <label for="lastname">Last Name : </label
                ><input
                  class="form-field"
                  type="text"
                  placeholder="Last Name"
                  id="lastname"
                  name="lastname"
                  v-model="lastname"
                  v-validate="'required'"
                  :class="{ 'is-invalid': submitted && error.has('lastName') }"
                />
                <div
                  v-if="submitted && error.has('lastName')"
                  class="invalid-feedback"
                >
                  {{ error.first("lastName") }}
                </div>
              </div>
              <br />
              <div class="number">
                <label for="number">Number : </label
                ><input
                  class="form-field"
                  type="number"
                  name="number"
                  placeholder="Number"
                  id="number"
                  v-model="number"
                  v-validate="{ required: true, min: 6 }"
                  :class="{ 'is-invalid': submitted && error.has('number') }"
                />
                <div
                  v-if="submitted && error.has('number')"
                  class="invalid-feedback"
                >
                  {{ error.first("number") }}
                </div>
              </div>
              <br />
              <div class="email">
                <label for="email">Email : </label
                ><input
                  class="form-field"
                  type="text"
                  placeholder="Email"
                  id="email"
                  name="email"
                  v-model="email"
                  v-validate="'required|email'"
                  :class="{ 'is-invalid': submitted && error.has('email') }"
                />
                <div
                  v-if="submitted && error.has('email')"
                  class="invalid-feedback"
                >
                  {{ error.first("email") }}
                </div>
              </div>
            </div>
            <br />
            <div class="modal-footer">
              <button class="button">Submit</button>
              <button class="button" @click="$emit('close')">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script>
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import { store } from "./store.js";

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      number: "",
      email: "",
      error: "",
      submitted: false,
    };
  },
  validations: {
    firstname: { required },
    lastname: { required },
    number: { required, min: minLength(10), max: maxLength(10) },
    email: { required, email },
  },
  // setup() {
  //   return { v$: useVuelidate() };
  // },
  methods: {
    displayContent() {
      this.submitted = true;

      const NewInformation = {
        firstname: store.state.newData.firstname,
        lastname: store.state.newData.lastname,
        number: store.state.newData.number,
        email: store.state.newData.email,
      };

      this.$emit("displayData", NewInformation);
      console.log(NewInformation);

      this.firstname = "";
      this.lastname = "";
      this.number = "";
      this.email = "";

      this.$validator.validate().then((valid) => {
        if (valid) {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(this));
        }
      });
      // this.$v.$touch();
      // if (this.$v.$invalid) {
      //   return;
      // }
    },
  },
  computed: {
    firstname: {
      get() {
        return store.state.newData.firstname;
      },
      set(value) {
        store.commit("setFirstname", value);
      },
    },
    lastname: {
      get() {
        return store.state.newData.lastname;
      },
      set(value) {
        store.commit("setLastname", value);
      },
    },
    number: {
      get() {
        return store.state.newData.number;
      },
      set(value) {
        store.commit("setNumber", value);
      },
    },
    email: {
      get() {
        return store.state.newData.email;
      },
      set(value) {
        store.commit("setEmail", value);
      },
    },
  },
};
</script>

<style scoped>
.invalid-feedback,
.is-invalid {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
  padding-left: 90px;
}
label {
  display: inline-flex;
  flex: 1;
  width: 90px;
}
.form-field.is-invalid {
  border-color: #dc3545;
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
  padding: 30px 40px;
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
  margin: 10px;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 40%;
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

.studentInfo {
  padding: 15px;
  text-align: center;
  font-size: 25px;
  font-family: "Times New Roman", Times, serif;
}
</style>
