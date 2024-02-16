import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductsContainer.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { addItemToCart } from "../../redux/slices/cartSlices";

function ProductCard({ productsCategory }) {
    const [category, setCategory] = useState(productsCategory);
    const [loading, setLoading] = useState(false);
    const [data, setdata] = useState(useSelector((state) => state.productsReducers.products));
    const [products, setProducts] = useState([]);
    let params = useParams();
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch(addItemToCart(product));
    };

    useEffect(() => {
        setProducts([]);
        setLoading(true);
        data.map((product) => {
            if (product.category === productsCategory) {
                setProducts((prevProducts) => [...prevProducts, product]);
            }
        });
        setCategory(productsCategory);



        setLoading(false);
    }, [params]);

    if (loading) return <p>Loading...</p>;
    return (
        <div className="products-container">
            <div className="container-title">
                <h1>Our {category.replace("ice_cream","ice cream")}</h1>
            </div>
            <div className="products">
                {products.map((product) => (
                    <div className="product-card">
                        <div className="card-image">
                            <img src={process.env.PUBLIC_URL + `/assets/${product.pictureName}`} alt={product.name} />
                        </div>
                        <div className="card-content">
                            <h1>{product.name}</h1>
                            <p>{product.price}$</p>
                        </div>
                        <div className="card-buttons">
                            <button onClick={() => addToCart(product)}>Add to cart</button>
                            <Link to={`/product/${product.id}`}><button id="rose">View details</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductCard;