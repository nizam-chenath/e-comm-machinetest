import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // Create a new array with the added item
      return [...state, action.payload];
    },
    removeFromCart: (state, action) => {
      // Return a new array without the item to remove
      return state.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.findIndex(item => item.id === id);

      if (itemIndex !== -1) {
        // Create a new array with the updated item
        state[itemIndex].quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
