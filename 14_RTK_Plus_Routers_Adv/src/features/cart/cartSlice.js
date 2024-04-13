import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload=pizza
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload=id
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //id
      console.log(action);
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      console.log(item);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
//action functions
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
//reducer
export default cartSlice.reducer;

//NEW-> Selector functions for state derivation inside useSelectors can also be put here as it is cart store state manipulation logic. Now it's reusable here and there. Pretty neat
//to optimise performance, there's a reselect library for selector functions, LATER TO DO

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) => {
  return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const getTotalCartPrice = (state) => {
  return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
};

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((curr) => curr.pizzaId === id)?.quantity ?? 0;
