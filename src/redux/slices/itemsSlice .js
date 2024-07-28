import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: { products: [], categories: [] },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    
  },
});

export const { setProducts, setCategories } = itemsSlice.actions;
export default itemsSlice;
