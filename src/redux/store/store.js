import { configureStore } from "@reduxjs/toolkit";
import productsReducers from "../slices/productsSlices";
import cartReducers from "../slices/cartSlices";

export default configureStore({
    reducer: {
        productsReducers,
        cartReducers,
    },
});
