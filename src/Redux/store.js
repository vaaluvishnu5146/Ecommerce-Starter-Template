import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import Theme from "./Reducers/theme";
import Products from "./Reducers/products";

// HELP US CREATE A STORE
export default configureStore({
  // ROOT REDUCER
  reducer: {
    theme: Theme,
    products: Products,
  },
});
