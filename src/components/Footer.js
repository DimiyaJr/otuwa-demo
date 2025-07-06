import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6 mb-3 text-center text-md-start">
            <img
              src="/logo.jpg"
              alt="OtuwaDeals Logo"
              style={{ height: '50px', width: 'auto', marginBottom: '10px' }}
            />
            <h5>OtuwaDeals.com</h5>
            <p className="small">
              Your trusted place for amazing online shopping deals.
            </p>
          </div>

          <div className="col-md-3 mb-3 text-center text-md-start">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
              <li><Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3 text-center text-md-start">
            <h6>Get in Touch</h6>
            <p className="small mb-1">Email: support@otuwadeals.com</p>
            <p className="small">Phone: +1 (234) 567-8901</p>
          </div>
        </div>

        <div className="text-center border-top pt-3 small">
          &copy; {new Date().getFullYear()} OtuwaDeals.com — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
