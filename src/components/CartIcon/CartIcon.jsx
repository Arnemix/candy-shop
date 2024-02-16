import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./CartIcon.scss";
import { MdOutlineShoppingCart } from "react-icons/md";

function CartIcon() {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cartReducers.items);
    const amountOfItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    const goToCart = () => {
        navigate("/cart");
    };

    return (
        <div className="cart-icon" onClick={goToCart}>
            <MdOutlineShoppingCart />
            {cart.length > 0 && <div className="cart-count">{amountOfItems}</div>}
        </div>
    );
}

export default CartIcon;
