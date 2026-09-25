import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <NavLink to="/" className="brand" end>
          <span className="brand-mark" aria-hidden="true">🌿</span>
          Paradise Nursery
        </NavLink>

        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
            Plants
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="cart-link">
              Cart
              <span className="cart-icon" aria-hidden="true">🛒</span>
              <span className="cart-count" aria-label={`${totalItems} items in cart`}>
                {totalItems}
              </span>
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
