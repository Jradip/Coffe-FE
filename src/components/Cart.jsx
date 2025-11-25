// Cart.jsx
import React from 'react';
import { FaPlus, FaMinus, FaTrash, FaArrowLeft, FaSearch } from 'react-icons/fa';
import { BsQrCodeScan } from 'react-icons/bs';

const Cart = ({ onBack }) => {
  const cartItems = [
    {
      id: 1,
      name: "Apple La Coronia",
      price: 4.14,
      weight: "896g",
      quantity: 2,
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "Organic Bananas",
      price: 3.99,
      weight: "500g",
      quantity: 1,
      image: "/api/placeholder/80/80"
    },
    {
      id: 3,
      name: "Fresh Strawberries",
      price: 5.50,
      weight: "250g",
      quantity: 1,
      image: "/api/placeholder/80/80"
    }
  ];

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const deliveryFee = 2.50;
  const total = calculateSubtotal() + deliveryFee;

  return (
    <div className="cart-container">
      {/* Header */}
      <header className="cart-header">
        <button className="back-btn" onClick={onBack}>
          <FaArrowLeft />
        </button>
        <h1 className="cart-title">My Cart</h1>
        <div className="header-actions">
          <button className="search-btn">
            <FaSearch />
          </button>
          <button className="delete-all-btn">
            <FaTrash />
          </button>
        </div>
      </header>

      {/* Scan Section */}
      <div className="scan-section">
        <div className="scan-card">
          <div className="scan-icon">
            <BsQrCodeScan />
          </div>
          <div className="scan-info">
            <h3 className="scan-title">Scan Maja</h3>
            <p className="scan-description">Scan QR code untuk pembayaran cepat</p>
          </div>
          <button className="scan-now-btn">
            Scan Now
          </button>
        </div>
      </div>

      {/* Cart Items */}
      <div className="cart-items-section">
        <div className="section-header">
          <h2 className="section-title">Items in Cart</h2>
          <span className="items-count">{cartItems.length} items</span>
        </div>

        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-weight">{item.weight}</p>
                <div className="item-price">${item.price.toFixed(2)}</div>
              </div>

              <div className="item-controls">
                <div className="quantity-controls">
                  <button className="quantity-btn">
                    <FaMinus />
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button className="quantity-btn">
                    <FaPlus />
                  </button>
                </div>
                <button className="remove-btn">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Summary */}
      <div className="pricing-section">
        <div className="pricing-row">
          <span className="pricing-label">Subtotal</span>
          <span className="pricing-value">${calculateSubtotal().toFixed(2)}</span>
        </div>
        <div className="pricing-row">
          <span className="pricing-label">Delivery Fee</span>
          <span className="pricing-value">${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="pricing-row">
          <span className="pricing-label">Discount</span>
          <span className="pricing-value discount">-$0.00</span>
        </div>
        <div className="pricing-divider"></div>
        <div className="pricing-row total">
          <span className="pricing-label">Total</span>
          <span className="pricing-value">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="checkout-section">
        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;