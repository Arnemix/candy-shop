import { configureStore } from "@reduxjs/toolkit";
import productsReducers from "../slices/productsSlices";

export default configureStore({
    reducer: {
        productsReducers,
    },
});
