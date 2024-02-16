import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, getCart } from "../../redux/slices/cartSlices";

function Cart(props) {
    const cart = useSelector((state) => state.cartReducers.items);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initialCartItems = [
            { name: "Chocolat", price: 3.5, quantity: 1 },
            { name: "Chocolat", price: 3.5, quantity: 1 },
            { name: "Chips", price: 3.5, quantity: 1 },
        ];

        initialCartItems.forEach((item) => {
            dispatch(addItemToCart(item));
        });
        dispatch(getCart());
        console.log(cart);
        setLoading(false);
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="cart-container">
            <div className="cart-title">
                <h1>Your Cart</h1>
            </div>
            <div className="cart-content">
                {cart.map((product) => (
                    <div key={product.name} className="cart-item">
                        <div className="cart-item-title">{product.name}</div>
                        <div className="cart-item-price">${product.price}</div>
                        <div className="card-item-quantity">
                            <p>Quantity: {product.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
