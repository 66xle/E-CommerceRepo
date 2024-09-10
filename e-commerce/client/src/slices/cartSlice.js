
import { createSlice, current } from '@reduxjs/toolkit';



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: []
    },
    reducers: {
        addItem: (state, action) => {
            if (state.cartList.filter(item => item.id === action.payload.id).length === 0) {
                state.cartList.push(action.payload);
            }
        },
        removeItem: (state, action) => {
            state.cartList = state.cartList.filter(item => item.id !== action.payload);
        },
    }
})

export const selectCart = (state) => state.cart.cartList;
export const {addItem, removeItem} = cartSlice.actions;


export default cartSlice.reducer;