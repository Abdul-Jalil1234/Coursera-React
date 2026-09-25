import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from '../CartSlice';
import Header from '../Header/Header';
import './CartItem.css';

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.cost * item.quantity,
    0
  );

  const handleIncrease = (name) => dispatch(increaseQuantity(name));
  const handleDecrease = (name) => dispatch(decreaseQuantity(name));
  const handleDelete = (name) => dispatch(removeItem(name));

  const handleCheckout = () => {
    setCheckoutMessage('Checkout is coming soon — thanks for your patience!');
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <div className="cart-page">
      <Header />

      <main className="cart-content">
        <h1>Your Shopping Cart</h1>

        <div className="cart-summary">
          <div>
            <span className="summary-label">Total plants</span>
            <span className="summary-value">{totalItems}</span>
          </div>
          <div>
            <span className="summary-label">Total cost</span>
            <span className="summary-value">${totalCost.toFixed(2)}</span>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart-message">
            Your cart is empty. Head back to the plant shop to find your next
            houseplant.
          </p>
        ) : (
          <ul className="cart-item-list">
            {cartItems.map((item) => (
              <li className="cart-item" key={item.name}>
                <img
                  src={item.image}
                  alt={`Thumbnail of ${item.name}`}
                  className="cart-item-thumb"
                />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-unit-price">
                    Unit price: ${item.cost.toFixed(2)}
                  </p>
                </div>

                <div className="cart-item-quantity">
                  <button
                    aria-label={`Decrease quantity of ${item.name}`}
                    onClick={() => handleDecrease(item.name)}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    aria-label={`Increase quantity of ${item.name}`}
                    onClick={() => handleIncrease(item.name)}
                  >
                    +
                  </button>
                </div>

                <p className="cart-item-line-total">
                  ${(item.cost * item.quantity).toFixed(2)}
                </p>

                <button
                  className="cart-item-delete"
                  aria-label={`Remove ${item.name} from cart`}
                  onClick={() => handleDelete(item.name)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="cart-actions">
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
          <button
            className="checkout-btn"
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
          >
            Checkout
          </button>
        </div>

        {checkoutMessage && (
          <p className="checkout-message" role="status">
            {checkoutMessage}
          </p>
        )}
      </main>
    </div>
  );
}

export default CartItem;
