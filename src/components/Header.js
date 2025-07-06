import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-white border-bottom shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-white container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={`${process.env.PUBLIC_URL}/logo.jpg`}
            alt="OtuwaDeals Logo"
            style={{ height: '50px', width: 'auto', marginRight: '10px' }}
          />
          <h5 className="mb-0 fw-bold text-dark">OtuwaDeals.com</h5>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark" onClick={() => setIsNavOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-dark" onClick={() => setIsNavOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-dark" onClick={() => setIsNavOpen(false)}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link text-dark" onClick={() => setIsNavOpen(false)}>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
