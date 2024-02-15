import React, { useEffect, useState } from "react";
import "./Home.scss";
import { useSelector } from "react-redux";

function Home(props) {
    const [products, setProducts] = useState(useSelector((state) => state.productsReducers.products));
    const [productsCopy, setProductsCopy] = useState(products);
    const [carouselProducts, setCarouselProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    //Permet de recupérer 5 produits au hasard
    useEffect(() => {
        setProductsCopy(products);
        console.log(productsCopy);
        for (let i = 0; i < 5; i++) {
            const random = Math.floor(Math.random() * productsCopy.length);
            setCarouselProducts([...carouselProducts, productsCopy[random]]);
        }
        setLoading(false);
        console.log(carouselProducts);
    }, [products]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="home-container">
            <div className="home-title">
                <h1>Discover our awesome products !</h1>
            </div>
            <div className="carousel">
                <div className="carousel-content">
                    {/* <h1>{carouselProducts[0].name}</h1> */}
                    {/* <img src="" alt={carouselProducts[0].name} /> */}
                </div>
            </div>
        </div>
    );
}

export default Home;
