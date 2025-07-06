// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '15px',
      margin: '10px',
      width: '220px',
      textAlign: 'center'
    }}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <img src={product.image} alt={product.name} style={{ width: '100%' }} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
