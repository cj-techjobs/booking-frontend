// components/ProductsGrid.js

import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
const products = [
  {
    id: 1,
    title: 'Product title',
    image: '/bikeImages/Dummy.png', // You can replace with the correct path
    rating: 4,
    price: 230,
  },
  {
    id: 2,
    title: 'Product title',
    image: '/bikeImages/Dummy.png',
    rating: 4,
    price: 230,
  },
  {
    id: 3,
    title: 'Product title',
    image: '/bikeImages/Dummy.png',
    rating: 4,
    price: 230,
  },
  {
    id: 4,
    title: 'Product title',
    image: '/bikeImages/Dummy.png',
    rating: 4,
    price: 230,
  },
  {
    id: 5,
    title: 'Product title',
    image: '/bikeImages/Dummy.png',
    rating: 4,
    price: 230,
  },
  {
    id: 6,
    title: 'Product title',
    image: '/bikeImages/Dummy.png',
    rating: 4,
    price: 230,
  },
  {
    id: 7,
    title: 'Product title',
    image: '/bikeImages/Dummy.png',
    rating: 4,
    price: 230,
  },
  {
    id: 8,
    title: 'Product title',
    image: '/bikeImages/Dummy.png',
    rating: 4,
    price: 230,
  },
  {
    id: 9,
    title: 'Product title',
    image: '/bikeImages/Dummy.png',
    rating: 4,
    price: 230,
  },
  {
    id: 10,
    title: 'Product title',
    image: '/bikeImages/Dummy.png',
    rating: 4,
    price: 230,
  },
  // Add more product objects here
];

const ProductsGrid = () => {
  return (
    <div className="scrollable-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
