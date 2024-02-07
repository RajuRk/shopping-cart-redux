//Create Slice
//initialize inizial state
//slice -> name, mention initial state, actions

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    removeToCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;