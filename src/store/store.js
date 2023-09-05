
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Slice/CartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
