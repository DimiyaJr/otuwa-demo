import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2500); // Hide message after 2.5 seconds
  };

  if (!product) return <div className="container mt-5">Product not found</div>;

  return (
    <div className="container my-5 position-relative">
      {/* Floating success message */}
      {showMessage && (
        <div className="alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3 shadow"
             style={{ zIndex: 1050, animation: 'fadeInOut 2.5s ease-in-out' }}>
          ✅ {product.name} has been added to your cart!
        </div>
      )}

      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">{product.name}</h2>
          <h4 className="text-primary">${product.price.toFixed(2)}</h4>
          <p className="mt-3">{product.description}</p>

          {/* Ratings (static for now) */}
          <div className="mb-3">
            <span className="badge bg-success me-2">Best Seller</span>
            <span>⭐⭐⭐⭐☆ (120 reviews)</span>
          </div>

          <button className="btn btn-success" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
