import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedCategory: "All",
    error: false,
  },
  reducers: {
    productFetchSuccess: (state, action) => {
      state.products = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    productFetchFailure: (state) => {
      state.error = true;
    },
  },
});

export const { productFetchSuccess, productFetchFailure, setSelectedCategory } = productSlice.actions;
export const products = (state: RootState) => state?.productRedux?.products;
export default productSlice.reducer;