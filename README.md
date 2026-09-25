# Paradise Nursery

Paradise Nursery is a React + Redux front-end for a houseplant shopping
application. Shoppers can browse plants organized by category, add them to
a shopping cart, and adjust quantities before checkout.

## Project name

**Paradise Nursery** — final project for the front-end capstone course.

## Features

- **Landing page** — background image, company name, an About Us section,
  and a "Get Started" button that leads into the shop.
- **Product listing page** — 18 houseplants across three categories (Air
  Purifying, Low Maintenance, Pet Friendly), each with a thumbnail, name,
  and price. Adding a plant to the cart disables its button and updates the
  cart icon in the header immediately.
- **Shopping cart page** — shows every plant in the cart with its
  thumbnail, name, unit price, and line total, alongside the overall total
  item count and total cost. Quantities can be increased or decreased, and
  items can be removed. Includes a "Continue Shopping" button and a
  "Checkout" button (shows a "coming soon" message).
- **Header** — appears on the product listing and cart pages, with
  navigation to Home, Plants, and Cart, plus a live-updating cart item
  count.
- **State management** — Redux Toolkit (`CartSlice.jsx`) manages the cart
  state: adding items, removing items, and increasing/decreasing quantity.

## Tech stack

- React 18
- Redux Toolkit + React Redux
- React Router
- Vite

## Getting started locally

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Building for production

```bash
npm run build
npm run preview
```

## Deploying to GitHub Pages

This project uses the `gh-pages` package for deployment.

1. Update `homepage` in `package.json` and `base` in `vite.config.js` to
   match your GitHub username and repository name.
2. Run:

   ```bash
   npm run deploy
   ```

3. In your repository settings, set GitHub Pages to serve from the
   `gh-pages` branch.

## Project structure

```
src/
  App.jsx                     # Landing page + routes
  App.css                     # Landing page background/styles
  main.jsx                    # App entry point (Redux Provider + Router)
  store.js                    # Redux store configuration
  index.css                   # Global design tokens and reset
  components/
    CartSlice.jsx             # Redux slice for cart state
    AboutUs/AboutUs.jsx       # Company info section
    Header/Header.jsx         # Nav + dynamic cart icon
    ProductList/ProductList.jsx  # Plant catalog + Add to Cart
    CartItem/CartItem.jsx     # Cart page with quantity controls
```
