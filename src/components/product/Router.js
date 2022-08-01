import Shopping from "./StateShopping.vue";
import Product from "./StateProduct.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Product, name: "Product" },
    { path: "/StateShopping", component: Shopping, name: "Shopping" },
  ],
});
