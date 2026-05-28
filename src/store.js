import userReducer from "./features/userSlice.js"
import productReducer from "./features/productSlice.js"
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    user: userReducer,
    product:productReducer,
  },
});
