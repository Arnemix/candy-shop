import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/database.json";

const productsSlices = createSlice({
    name: "productsReducers",
    initialState: {
        products: data.products,
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { setProducts } = productsSlices.actions;
export default productsSlices.reducer;
