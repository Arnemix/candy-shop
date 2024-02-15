import React, { useEffect } from "react";
import "./Home.scss";
import { useSelector } from "react-redux";

function Home(props) {
    const products = useSelector((state) => state.productsReducers.products);
    const productsCopy = [...products];
    const carouselProducts = [];
    let loading = true;
    //Permet de recupérer 5 produits au hasard
    useEffect(() => {
        if (products.length === 0) return;
        for (let i = 0; i < 5; i++) {
            const random = Math.floor(Math.random() * productsCopy.length);
            carouselProducts.push(productsCopy[random]);
            productsCopy.splice(random, 1);
        }
        loading = false;
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
                    <img src="" alt={carouselProducts[0].name} />
                </div>
            </div>
        </div>
    );
}

export default Home;
