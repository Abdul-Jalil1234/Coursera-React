import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';
import Header from '../Header/Header';
import './ProductList.css';

// Plant data grouped into three categories, six plants each (18 total).
// Thumbnails use a stable placeholder image service — swap these src
// values for your own product photography before final submission.
const plantCategories = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', cost: 24.99, color: '2f5d50' },
      { name: 'Peace Lily', cost: 29.99, color: '3a6b52' },
      { name: 'Spider Plant', cost: 18.5, color: '4c7a5c' },
      { name: 'Areca Palm', cost: 34.0, color: '386b48' },
      { name: 'Boston Fern', cost: 21.75, color: '2d5940' },
      { name: 'Rubber Plant', cost: 27.25, color: '244d3a' },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      { name: 'ZZ Plant', cost: 26.0, color: '5c7a4c' },
      { name: 'Pothos', cost: 15.99, color: '6b8a52' },
      { name: 'Cast Iron Plant', cost: 22.5, color: '4a6b3a' },
      { name: 'Dracaena', cost: 30.0, color: '3f5c33' },
      { name: 'Aglaonema', cost: 23.99, color: '567a44' },
      { name: 'Chinese Evergreen', cost: 25.5, color: '3c5a30' },
    ],
  },
  {
    category: 'Pet Friendly Plants',
    plants: [
      { name: 'Calathea', cost: 19.99, color: '7a8f52' },
      { name: 'Parlor Palm', cost: 28.0, color: '5e8a4c' },
      { name: "Baby's Tears", cost: 12.99, color: '6f8f4c' },
      { name: 'Prayer Plant', cost: 20.5, color: '4f7a44' },
      { name: 'Boston Fern (Pet Safe)', cost: 21.75, color: '3f6b3a' },
      { name: 'Friendship Plant', cost: 17.25, color: '598a52' },
    ],
  },
];

function makeThumbnail(name, color) {
  const label = encodeURIComponent(name);
  return `https://placehold.co/300x300/${color}/ffffff?text=${label}&font=roboto`;
}

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedPlants, setAddedPlants] = useState({});

  const isInCart = (name) =>
    cartItems.some((item) => item.name === name) || addedPlants[name];

  const handleAddToCart = (plant) => {
    const image = makeThumbnail(plant.name, plant.color);
    dispatch(addItem({ name: plant.name, image, cost: plant.cost }));
    setAddedPlants((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-list-page">
      <Header />

      <main className="product-list">
        <h1>Shop Houseplants</h1>
        <p className="product-list-intro">
          Browse our hand-picked collection, organized by what matters most
          when choosing a plant for your space.
        </p>

        {plantCategories.map((group) => (
          <section key={group.category} className="category-section">
            <h2>{group.category}</h2>
            <div className="plant-grid">
              {group.plants.map((plant) => {
                const added = isInCart(plant.name);
                return (
                  <div className="plant-card" key={plant.name}>
                    <img
                      src={makeThumbnail(plant.name, plant.color)}
                      alt={`Thumbnail of ${plant.name}`}
                      className="plant-thumb"
                    />
                    <h3>{plant.name}</h3>
                    <p className="plant-price">${plant.cost.toFixed(2)}</p>
                    <button
                      className="add-to-cart-btn"
                      disabled={added}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {added ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
