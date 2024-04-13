import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import storeReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    store: storeReducer,
  },
});
export default store;
