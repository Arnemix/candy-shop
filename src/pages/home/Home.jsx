import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Home.scss";

function Home(props) {
    const [products, setProducts] = useState(useSelector((state) => state.productsReducers.products));
    const [productsCopy, setProductsCopy] = useState(products);
    const [carouselProducts, setCarouselProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setProductsCopy(products);
        setCarouselProducts((prevCarouselProducts) => {
            let updatedCarouselProducts = [...prevCarouselProducts];
            for (let i = 0; i < 5; i++) {
                const random = Math.floor(Math.random() * productsCopy.length);
                updatedCarouselProducts.push(productsCopy[random]);
                setProductsCopy(productsCopy.filter((product) => product.id !== productsCopy[random].id));
            }
            return updatedCarouselProducts;
        });
        setLoading(false);
    }, [products]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === carouselProducts.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselProducts.length - 1 : prevIndex - 1));
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="home-container">
            <div className="home-title">
                <h1>Discover our awesome products ! </h1>
            </div>
            <div className="carousel">
                <div className="carousel-content">
                    {carouselProducts.map((product, index) => (
                        <div key={index} className={index === currentIndex ? "carousel-product active" : "carousel-product"}>
                            <h1>{product.name}</h1>
                            <img src={process.env.PUBLIC_URL + `/assets/${product.pictureName}`} alt={product.name} />
                        </div>
                    ))}
                </div>
                <div className="buttons">
                    <button className="prev" onClick={prevSlide}>
                        Prev
                    </button>
                    <button className="next" onClick={nextSlide}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
