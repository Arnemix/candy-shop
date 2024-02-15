import { createSlice } from "@reduxjs/toolkit";

const productsSlices = createSlice({
    name: "productsReducers",
    initialState: {
        products: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { setProducts } = productsSlices.actions;
export default productsSlices.reducer;
