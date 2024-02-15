import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ProductsContainer.scss";

function ProductCard({ productsCategory }) {
    const [category, setCategory] = useState(productsCategory);
    const [loading, setLoading] = useState(false);
    const [data, setdata] = useState(useSelector((state) => state.productsReducers.products));
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log(products);
    }, []);

    return (
        <div className="products-container">
            <div className="container-title">
                <h1>Our {category}</h1>
            </div>
            <div className="products">
                {data.map(
                    (product) =>
                        product.category === category && (
                            <div className="product-card">
                                <div className="card-image">
                                    <img src={process.env.PUBLIC_URL + `/assets/${product.pictureName}`} alt={product.name} />
                                </div>
                                <div className="card-content">
                                    <h1>{product.name}</h1>
                                    <p>{product.price}$</p>
                                </div>
                                <div className="card-buttons">
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
}

export default ProductCard;
