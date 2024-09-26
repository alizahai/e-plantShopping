import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add Item function: when user wants to add item to cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // extract name, image, and cost from the action's payload
      const existingItem = state.items.find((item) => item.name === name); // search through the state.items array to see if an item with the same name already exists in the cart
      if (existingItem) {
        // If the item is found, its quantity is incremented by 1
        existingItem.quantity++;
      } else {
        // If the item is not found, a new object is pushed to the state.items array
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Remove Item function: when user wants to remove item from cart
    removeItem: (state, action) => {
      // update state.items to a new array that contains all items except the one(s) whose name matched action.payload
      state.items = state.items.filter((item) => item.name !== action.payload);
    },

    // Update Item function: when user wants to update item's quantity in cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // extract name, and quantity from the action's payload
      const itemToUpdate = state.items.find((item) => item.name === name); // search through the state.items array to see if an item with the same name exists in the cart
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
