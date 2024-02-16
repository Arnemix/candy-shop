import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Cart(props) {
    const cartItems = useState(useSelector((state) => state.cartReducers.cartItems));

    useEffect(() => {}, []);

    return (
        <div className="cart-container">
            <div className="cart-title">
                <h1>Your Cart</h1>
            </div>
            <div className="cart-content"></div>
        </div>
    );
}

export default Cart;
