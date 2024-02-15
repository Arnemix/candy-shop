import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Home.scss";

function Home(props) {
    const [products, setProducts] = useState(useSelector((state) => state.productsReducers.products));
    const [productsCopy, setProductsCopy] = useState(products);
    const [carouselProducts, setCarouselProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    //Permet de recupérer 5 produits au hasard
    useEffect(() => {
        setProductsCopy(products);
        setCarouselProducts((prevCarouselProducts) => {
            let updatedCarouselProducts = [...prevCarouselProducts];
            for (let i = 0; i < 5; i++) {
                console.log("Execute");
                const random = Math.floor(Math.random() * productsCopy.length);
                updatedCarouselProducts.push(productsCopy[random]);
                setProductsCopy(productsCopy.filter((product) => product.id !== productsCopy[random].id));
            }
            return updatedCarouselProducts;
        });
        setLoading(false);
    }, [products]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="home-container">
            <div className="home-title">
                <h1>Discover our awesome products ! ({carouselProducts.length})</h1>
            </div>
            <div className="carousel">
                <div className="carousel-content">
                    {carouselProducts.map((product) => (
                        <div key={product.id} className="carousel-product">
                            <h1>{product.name}</h1>
                            <img src={process.env.PUBLIC_URL + `/assets/${product.pictureName}`} alt={product.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
