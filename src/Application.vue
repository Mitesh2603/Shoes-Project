<script lang="ts">
import { useMouse } from "./components/mouse.js";
import { useFetch } from "./components/fetch.js";
import { ref, computed } from "vue";

const baseUrl = "https://jsonplaceholder.typicode.com/todos/";
const id = ref("1");
const url = computed(() => baseUrl + id.value);

const { data, error, retry } = useFetch(url);

export default {
  data() {
    return {
      show: true,
    };
  },
};

const { x, y } = useMouse();
const { data, error } = useFetch("https://reqres.in/api/users?page=2");
</script>

<template>
  <center>
    <div>Mouse Pointer at : {{ x }}, {{ y }}</div>
    <div>{{ data }} : {{ error }}</div>

    Load Post id:
    <button v-for="i in 5" @click="id = i">{{ i }}</button>
    <div v-if="error">
      <p>Oops! Error encountered: {{ error.message }}</p>
      <button @click="retry">Retry</button>
    </div>
    <div v-else-if="data">
      Data loaded:
      <pre>{{ data }}</pre>
    </div>
    <div v-else>Loading...</div>

    <button class="border" @click="show = !show">Toggle</button>
    <Transition name="fade">
      <p v-if="show">Hello</p>
    </Transition>

    <Transition name="slide-fade">
      <p v-if="show">Hello</p>
    </Transition>

    <Transition name="bounce">
      <p v-if="show">Hello</p>
    </Transition>

    <Transition
      name="custom-classes"
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <p v-if="show">hello</p>
    </Transition>

    <Transition duration="550" name="nested">
      <div v-if="show" class="outer">
        <div class="inner">Hello</div>
      </div>
    </Transition>
  </center>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

.outer,
.inner {
  background: #eee;
  padding: 30px;
  min-height: 100px;
}
.inner {
  background: #ccc;
}
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}
.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
</style>
