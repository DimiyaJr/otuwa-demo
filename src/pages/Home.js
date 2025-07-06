import React, { useState } from 'react';
import products from '../data/products';
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <div className="bg-light py-5 text-center border-bottom">
        <div className="container">
          <h1 className="display-5 fw-bold">Welcome to OtuwaDeals</h1>
          <p className="lead">Find great tech and gadget deals at unbeatable prices.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="container mt-5 mb-4">
        <div className="row g-3 align-items-center justify-content-between">
          <div className="col-md-6">
            <input
              type="text"
              placeholder="Search products..."
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container my-3">
        <h2 className="mb-4 text-center">Featured Products</h2>
        <div className="row">
          {filteredProducts.length === 0 ? (
            <div className="col-12 text-center">
              <div className="alert alert-warning">No products found.</div>
            </div>
          ) : (
            filteredProducts.map(product => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100 shadow-sm position-relative">
                  {product.badge && (
                    <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">
                      {product.badge}
                    </span>
                  )}
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="text-muted mb-1">${product.price.toFixed(2)}</p>

                    {/* Star rating */}
                    <div className="mb-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={i < product.rating ? 'text-warning' : 'text-muted'}>
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="card-text">{product.description.slice(0, 60)}...</p>
                    <Link to={`/product/${product.id}`} className="btn btn-outline-primary mt-auto">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
