import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../../data/database.json"; 


function ProductDetails() {
    const { id } = useParams();
    const product = productsData.products.find((product) => product.id === Number(id));

    if (!product) return <p>Produit non trouvé</p>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}$</p>
            <img src={process.env.PUBLIC_URL + `/assets/${product.pictureName}`} alt={product.name} />
        </div>
    );
}

export default ProductDetails;