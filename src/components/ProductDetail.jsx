// ProductDetail.jsx
import React, { useState } from 'react';
import { FaPlus, FaMinus, FaHeart, FaArrowLeft } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  
  const product = {
    name: "Apple La Coronia",
    rating: 4.5,
    reviews: 25,
    description: "Agents Are Nutritional. Agnite Map Be Good For Weight Loss. Applies May Be Good For Your Heart. As Part Of A Healthal And Varied Diet.",
    price: 4.14,
    weight: "896g",
    image: "/api/placeholder/414/896" // Ganti dengan path gambar yang sesuai
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="product-detail-container">
      {/* Header */}
      <header className="product-header">
  <button className="back-btn" onClick={onBack}>
    <FaArrowLeft />
  </button>
  <h1 className="product-title">Product Detail</h1>
  <button className="wishlist-btn">♡</button>
</header>


      {/* Product Image */}
      <div className="product-image-section">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
      </div>

      {/* Product Info */}
      <div className="product-info-section">
        <h2 className="product-name">{product.name}</h2>
        
        <div className="rating-section">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <IoIosStar 
                key={i} 
                className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
              />
            ))}
          </div>
          <span className="rating-text">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        <p className="product-description">{product.description}</p>

        {/* Quantity Selector */}
        <div className="quantity-section">
          <span className="quantity-label">Quantity</span>
          <div className="quantity-controls">
            <button 
              className="quantity-btn" 
              onClick={decreaseQuantity}
              disabled={quantity <= 1}
            >
              <FaMinus />
            </button>
            <span className="quantity-value">{quantity}</span>
            <button 
              className="quantity-btn" 
              onClick={increaseQuantity}
            >
              <FaPlus />
            </button>
          </div>
        </div>

        {/* Price and Add to Basket */}
        <div className="price-basket-section">
          <div className="price-info">
            <span className="price">${product.price}</span>
            <span className="weight">/{product.weight}</span>
          </div>
          
          <button className="add-to-basket-btn">
            <FaPlus className="basket-icon" />
            <span>Add To Basket</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;