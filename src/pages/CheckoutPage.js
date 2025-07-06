import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Checkout Summary</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-warning text-center">
          Your cart is empty. Go back and add some items.
        </div>
      ) : (
        <div className="row">
          {/* Left: Cart Summary */}
          <div className="col-md-6">
            <h4>Your Order</h4>
            <ul className="list-group mb-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    {item.name} × {item.quantity}
                  </div>
                  <div>${(item.price * item.quantity).toFixed(2)}</div>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </li>
            </ul>
          </div>

          {/* Right: Mock Shipping Form */}
          <div className="col-md-6">
            <h4>Shipping Information</h4>
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="John Doe" disabled />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="john@example.com" disabled />
              </div>
              <div className="mb-3">
                <label className="form-label">Shipping Address</label>
                <textarea className="form-control" rows="3" placeholder="123 Main Street" disabled></textarea>
              </div>
              <button type="button" className="btn btn-primary w-100" disabled>
                Place Order (Demo Only)
              </button>
              <p className="text-muted small mt-2">
                This is a demo — no real orders are submitted.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
