import { createStore } from "vuex";

export const store = createStore({
  state: {
    products: [
      {
        id: 1,
        name: "TV",
        image:
          "https://images.philips.com/is/image/PhilipsConsumer/58PUT6604_94-IMS-en_IN?$jpglarge$&wid=960",
        price: 25000,
      },
      {
        id: 2,
        name: "Fridge",
        image:
          "https://5.imimg.com/data5/UB/VX/HZ/ANDROID-105122817/product-jpeg-500x500.jpg",
        price: 20000,
      },
      {
        id: 3,
        name: "Laptop",
        image:
          "https://www.cnet.com/a/img/resize/4e82f3a17554a5aff8089194237de5a3acfce3b4/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=630&width=1200",
        price: 60000,
      },
      {
        id: 4,
        name: "Mobile",
        image: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg",
        price: 33000,
      },
    ],
    StoreCart: [],
  },
  getters: {
    products: (state) => state.products,
    StoreCart: (state) => state.StoreCart,
  },
  mutations: {
    ADD_Item(state, products) {
      // console.log("Add icon id", id, state.StoreCart);
      state.StoreCart.push(products);
    },
    REMOVE_Item(state, id) {
      // console.log("id", id);
      console.log("state", state);
      state.StoreCart.splice(id, 1);
    },
  },
  actions: {
    addItem(context, id) {
      context.commit("ADD_Item", id);
    },
    removeItem(context, id) {
      context.commit("REMOVE_Item", id);
    },
  },
});
