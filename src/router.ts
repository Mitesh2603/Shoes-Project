import { createRouter, createWebHistory } from "vue-router";
import Shopping from "./components/product/StateShopping.vue";
import Product from "./components/product/StateProduct.vue";
import Back from "./components/product/StateProduct.vue";
import Modal from "./components/CRUD/Modal.vue";
import Home from "./components/CRUD/Home.vue";

export const router = createRouter({
  history: createWebHistory(),

  routes: [
    // { path: "/", component: Product, name: "Product" },
    { path: "/", component: Home, name: "Home" },
    // { path: "/StateShopping", component: Shopping, name: "Shopping" },
    // { path: "/StateProduct", component: Back, name: "Back" },
    { path: "/Modal", component: Modal, name: "Modal" },
  ],
});
router.beforeEach((to, from) => {});
