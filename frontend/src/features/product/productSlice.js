import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    allProducts: [],
    fruits: [],
    veg: [],
    total: 0,
    isLoading: true,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        updateProductList: (state, action) => {
            state.allProducts = action.payload.allFruits;
            state.fruits = action.payload.fruits;
            state.veg = action.payload.veg;
            state.total = action.payload.allFruits.length();
        }
    }
})


export const { updateProductList } = productSlice.actions;

export default productSlice.reducer;