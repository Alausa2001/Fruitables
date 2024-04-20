import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    quantity: 0,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item._id !== itemId)
            cartSlice.caseReducers.calculateTotals(state);
        },
        updateCartQuantity: (state, action) => {
            const cartItem = state.cartItems.find(item => item._id === action.payload.id);
            cartItem.quantity = Number(action.payload.quantity);
            cartSlice.caseReducers.calculateTotals(state);
        },
        calculateTotals: (state) => {
            let quantity = 0;
            let total = 0;
            state.cartItems.forEach(item => {
                quantity += item.quantity;
                total += item.quantity * item.price;
            });
            state.quantity = quantity;
            state.total = total;
        },
        addToCart: (state, action) => {
            const cartItem = state.cartItems.find(item => item._id === action.payload._id);
            if(!cartItem){
                state.cartItems.push(action.payload);
            }else{
                cartItem.quantity += action.payload.quantity;
            }
            cartSlice.caseReducers.calculateTotals(state);

        }
    }
})

// console.log(cartSlice);
export const { clearCart, removeItem, updateCartQuantity, calculateTotals, addToCart } = cartSlice.actions;

export default cartSlice.reducer;