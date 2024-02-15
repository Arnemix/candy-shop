import React from 'react';

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.pictureName} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}€</p>
            <p>{product.quantity} en stock</p>
        </div>
    );
}

export default ProductCard;