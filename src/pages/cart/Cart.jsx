import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import { removeItemFromCart } from "../../redux/slices/cartSlices";
function Cart(props) {
    const cart = useSelector((state) => state.cartReducers.items);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(cart);
        setLoading(false);
    }, [dispatch, cart]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="cart-container">
            <div className="cart-title">
                <h1>Your Cart</h1>
                <h2>{cart.length} products</h2>
            </div>
            <div className="cart-content">
                {cart.map((product) => (
                    <div key={product.name} className="cart-item">
                        <div className="card-item-image">
                            <img src={process.env.PUBLIC_URL + `/assets/${product.pictureName}`} alt={product.name} />
                        </div>
                        <div className="card-item-content">
                            <div className="cart-item-title">
                                <p>Item : {product.name}</p>
                            </div>
                            <div className="cart-item-price">
                                <p>Price : ${product.price} </p>
                            </div>
                            <div className="card-item-quantity">
                                <p>Quantity: {product.quantity}</p>
                            </div>
                        </div>
                        <div className="card-item-button">
                            <button onClick={() => dispatch(removeItemFromCart(product))}>
                                <FaRegTrashAlt />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
