import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../../data/database.json";
import "../ProductsDetails/ProductsDetails.scss";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/slices/cartSlices";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = productsData.products.find((product) => product.id === Number(id));
    const dispatch = useDispatch();

    if (!product) return <p>Produit non trouvé</p>;

    const addToCart = () => {
        dispatch(addItemToCart(product));
        navigate("/cart");
    };

    return (
        <div className="product-details">
            <button className="back-button" onClick={() => navigate(-1)}>
                <FaArrowLeft />
            </button>
            <div className="product-image-container">
                <img className="product-image" src={process.env.PUBLIC_URL + `/assets/${product.pictureName}`} alt={product.name} />
            </div>
            <div className="product-info">
                <h1 className="product-title">{product.name}</h1>
                <h2 className="product-price">{product.price}$</h2>
                <p className="product-description">{product.description}</p>
                <div className="product-price-cart">
                    <button onClick={addToCart} className="add-to-cart">
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
