import React from 'react';
import './ProductCatalog.css'; 

const MobileCard = ({ mobile }) => {
  return (
    <div className="card">
      <img src={`/images/${mobile.image}`} alt={mobile.name} />
      <h3>{mobile.name}</h3>
      <p>Price: ${mobile.price}</p>
      <p>Rating: {mobile.rating}/5</p>
      <button>Add to Cart</button>
    </div>
  );
};

const ProductCatalog = () => {
  const mobiles = [
    {
      id: 1,
      name: 'iPhone 13',
      price: 799,
      rating: 4.7,
      image: 'iphone13.jpg',
      category: 'Smartphone',
      brand: 'Apple',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      price: 699,
      rating: 4.6,
      image: 'galaxys21.jpg',
      category: 'Smartphone',
      brand: 'Samsung',
    },
    {
      id: 3,
      name: 'Google Pixel 6',
      price: 699,
      rating: 4.8,
      image: 'pixel6.jpg',
      category: 'Smartphone',
      brand: 'Google',
    },
    {
      id: 4,
      name: 'iPad Air',
      price: 599,
      rating: 4.9,
      image: 'ipadair.jpg',
      category: 'Tablet',
      brand: 'Apple',
    },
    {
      id: 5,
      name: 'Samsung Galaxy Tab S7',
      price: 649,
      rating: 4.7,
      image: 'galaxytabs7.jpg',
      category: 'Tablet',
      brand: 'Samsung',
    },
    {
      id: 6,
      name: 'Apple Watch Series 7',
      price: 399,
      rating: 4.6,
      image: 'applewatch.jpg',
      category: 'Accessory',
      brand: 'Apple',
    },
  
  ];


  const categories = ['Smartphone', 'Tablet', 'Accessory']; 
  const brands = ['Apple', 'Samsung', 'Google']; 

  return (
    <div className="catalog-container">
      <div className="sidebar">
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>
        <div className="brands">
          <h3>Brands</h3>
          <ul>
            {brands.map((brand, index) => (
              <li key={index}>{brand}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mobile-cards">
        {mobiles.map((mobile) => (
          <MobileCard key={mobile.id} mobile={mobile} />
        ))}
      </div>
    </div>
  );
};
export default ProductCatalog;