import { configureStore } from "@reduxjs/toolkit";
// import itemsReducer from "./slices/itemsSlice";
// import cartReducer from "./slices/cartSlice";
// import authReducer from "./slices/authSlice";
import itemsSlice from "./slices/itemsSlice ";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";


const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
