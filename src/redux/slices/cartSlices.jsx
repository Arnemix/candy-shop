import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItemToCart(state, action) {
            const { name } = action.payload;
            const existingItem = state.items.find((item) => item.name === name);
            if (existingItem) {
                console.log("existingItem", existingItem);
                existingItem.quantity++;
            } else {
                console.log("unexisting", action.payload);
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItemFromCart(state, action) {
            const { name } = action.payload;
            const existingItem = state.items.find((item) => item.name === name);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter((item) => item.name !== name);
                } else {
                    existingItem.quantity--;
                }
            }
        },
        clearCart(state) {
            state.items = [];
        },
        getCart(state) {
            console.log(state.items);
        },
    },
});

export const { addItemToCart, removeItemFromCart, clearCart, getCart } = cartSlice.actions;
export default cartSlice.reducer;
