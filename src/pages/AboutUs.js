import React from 'react';

const AboutUs = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">About OtuwaDeals.com</h2>
      <p className="lead text-center mb-5">
        Welcome to OtuwaDeals.com — where savings meet style!
      </p>

      <div className="row">
        <div className="col-md-6 mb-4">
          <h4>Our Story</h4>
          <p>
            Founded in 2024, OtuwaDeals.com was created with a simple mission: to provide customers with high-quality products at unbeatable prices. We started as a small team of passionate deal-hunters and quickly grew into a go-to destination for online shoppers across the country.
          </p>
        </div>
        <div className="col-md-6 mb-4">
          <h4>What We Offer</h4>
          <ul className="list-unstyled">
            <li>✔️ Electronics, Fashion, Home Essentials, and More</li>
            <li>✔️ Fast & Secure Checkout</li>
            <li>✔️ Weekly Flash Deals</li>
            <li>✔️ Excellent Customer Service</li>
          </ul>
        </div>
      </div>

      <div className="bg-light p-4 rounded mt-4">
        <h5>Why Shop With Us?</h5>
        <p>
          At OtuwaDeals, we believe that everyone deserves access to affordable shopping without compromising quality. We partner with trusted vendors to deliver authentic, reliable, and trending items right to your door.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
