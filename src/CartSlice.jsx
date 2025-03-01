import { current, createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const itemInCart = state.items.find((item) => item.name === action.payload.name);
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            state.items.push({...action.payload, quantity: 1})
        }
        
        
        
    },
    removeItem: (state, action) => {
        state.items.filter(item => item.name != action.payload.name)
        console.log(current(state.items))
    },
    updateQuantity: (state, action) => {
        console.log(action.payload)
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
