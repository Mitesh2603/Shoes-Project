import { createRouter, createWebHistory } from "vue-router";
import Shopping from "./components/product/StateShopping.vue";
import Product from "./components/product/StateProduct.vue";
import Back from "./components/product/StateProduct.vue";

export const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: "/", component: Product, name: "Product" },
    { path: "/StateShopping", component: Shopping, name: "Shopping" },
    { path: "/StateProduct", component: Back, name: "Back" },
  ],
});
router.beforeEach((to, from) => {});
