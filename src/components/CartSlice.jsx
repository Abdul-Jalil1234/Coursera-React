import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Each item: { name, image, cost (number), quantity }
  items: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter((item) => item.name !== name);
    },
    increaseQuantity: (state, action) => {
      const name = action.payload;
      const item = state.items.find((item) => item.name === name);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const name = action.payload;
      const item = state.items.find((item) => item.name === name);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // Quantity would drop to zero — remove the item entirely
          state.items = state.items.filter((i) => i.name !== name);
        }
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((item) => item.name === name);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  updateQuantity,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;
