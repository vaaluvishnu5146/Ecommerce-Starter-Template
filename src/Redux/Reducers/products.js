import { createSlice } from "@reduxjs/toolkit";

export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
  },
  reducers: {
    // ACTION CREATOR
    saveProducts: (state, action) => {
      if (action.payload) {
        return {
          ...state,
          data: [...action.payload],
        };
      }
    },
  },
});

export const { saveProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
