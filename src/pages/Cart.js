import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center">
          Your cart is empty. <Link to="/">Start shopping</Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            <ul className="list-group mb-4">
              {cartItems.map((item) => (
                <li key={item.id} className="list-group-item d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                    className="me-3 rounded"
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{item.name}</h6>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-sm btn-outline-secondary me-2"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        −
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary me-3"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                      <small className="text-muted">× ${item.price.toFixed(2)}</small>
                    </div>
                  </div>
                  <div className="text-end">
                    <strong className="me-3">
                      ${(item.price * item.quantity).toFixed(2)}
                    </strong>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cart Summary</h5>
                <p className="card-text">Items: {cartItems.length}</p>
                <p className="card-text fw-bold">Total: ${total.toFixed(2)}</p>
                <Link to="/checkout" className="btn btn-success w-100">
                  Proceed to Checkout
                </Link>
                <p className="mt-2 small text-muted">Checkout is disabled in this demo.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
