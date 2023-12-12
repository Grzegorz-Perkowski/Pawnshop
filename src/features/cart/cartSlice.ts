import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { CartState, CartItem } from "../../interfaces/Cart.interface";

const initialState: CartState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const { id, quantity } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push(action.payload);
      }
      },
      removeFromCart(state, action: PayloadAction<CartItem>) {
      const { id } = action.payload;
      const existingItemIndex = state.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity -= 1;

        if (state[existingItemIndex].quantity === 0) {
          state.splice(existingItemIndex, 1);
        }
      }
    },
    },
  
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
