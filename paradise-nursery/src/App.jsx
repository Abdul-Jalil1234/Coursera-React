import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import ProductList from './components/ProductList/ProductList';
import CartItem from './components/CartItem/CartItem';
import './App.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-tagline">
          Thoughtfully grown houseplants, delivered to your door.
        </p>
        <button
          className="get-started-btn"
          onClick={() => navigate('/products')}
        >
          Get Started
        </button>
        <AboutUs />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;
