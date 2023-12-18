import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartState, ICartItem } from "cart-types";

const initialState: ICartState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem>) {
      const { id, quantity } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + (quantity || 0);
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<ICartItem>) {
      const { id } = action.payload;
      const existingItemIndex = state.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        const existingItem = state[existingItemIndex];

        if (existingItem.quantity !== undefined) {
          existingItem.quantity -= 1;

          if (existingItem.quantity === 0) {
            state.splice(existingItemIndex, 1);
          }
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
