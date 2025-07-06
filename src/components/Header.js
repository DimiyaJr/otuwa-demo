import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-bottom shadow-sm">
      <div className="container d-flex align-items-center justify-content-between py-2">
        <Link to="/" className="text-decoration-none d-flex align-items-center">
          <img
            src={`${process.env.PUBLIC_URL}/logo.jpg`}
            alt="OtuwaDeals Logo"
            style={{ height: '50px', width: 'auto', marginRight: '10px' }}
          />
          <h4 className="m-0 text-dark fw-bold">OtuwaDeals.com</h4>
        </Link>

        <nav>
          <Link to="/" className="mx-2 text-dark text-decoration-none">Home</Link>
          <Link to="/about" className="mx-2 text-dark text-decoration-none">About</Link>
          <Link to="/contact" className="mx-2 text-dark text-decoration-none">Contact</Link>
          <Link to="/cart" className="mx-2 text-dark text-decoration-none">Cart</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
