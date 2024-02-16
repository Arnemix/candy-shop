import { createSlice } from "@reduxjs/toolkit";

const cartSlices = createSlice({
    name: "cartReducers",
    initialState: {
        cart: [],
    },
    reducers: {
        addItemToCard: (state, action) => {
            state.map((product) => {
                if (product.name === action.payload.name) {
                    product.quantity += 1;
                    console.warn(`New item quantity : ${product.quantity}`);
                }
                return product;
            });
            state.cart.push(action.payload);
            console.warn("Item added to cart");
        },
        removeItemFromCart: (state, action) => {
            state.map((product) => {
                if (product.name === action.payload.name) {
                    product.quantity -= 1;
                    console.warn(`New item quantity : ${product.quantity}`);
                }
                return product;
            });
            state.cart = state.cart.filter((product) => product.name !== action.payload.name);
            console.warn("Item removed from cart");
        },
        clearCart: (state) => {
            state.cart = [];
            console.warn("Cart is now clear");
        },
    },
});

export const { addItemToCard, removeItemFromCart, clearCart } = cartSlices.actions;
export default cartSlices.reducer;
