// src/components/Cart.jsx
import React from "react";
import "./Cart.css";
import { FaArrowLeft } from "react-icons/fa";
import CartView from "./CartView";
import { RiCoupon2Line } from "react-icons/ri";


function Cart({
  items = [],
  onBack,
  onIncrement,
  onDecrement,
  onRemove,
  onOpenCoupon, 
}) {
  const total = items.reduce(
    (sum, item) => sum + (item.price || 0) * (item.qty || 0),
    0
  );

  const handleOpenCoupon = () => {
    if (onOpenCoupon) onOpenCoupon(); 
  };

  const itemCount = items.reduce((sum, item) => sum + (item.qty || 0), 0);

  return (
    <div className="cart-container">
      {/* HEADER */}
      <header className="cart-header">
  <button type="button" className="back-btn" onClick={onBack}>
    <FaArrowLeft />
  </button>
  <h1 className="cart-title">My Cart</h1>
  {/* placeholder kosong biar judul tetap center */}
  <div className="header-placeholder" />
</header>

      {/* LIST ITEM */}
      <section className="cart-items-section">
        <div className="section-header">
          <h2 className="section-title">Pesanan</h2>
          <span className="items-count">{itemCount} item</span>
        </div>

        <CartView
          items={items}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onRemove={onRemove}
        />
      </section>

      {/* TOTAL & KUPON */}
      <section className="pricing-section">
        {/* Row Kupon */}
        <div className="coupon-row">
          <span className="coupon-label">Kupon</span>
          <button
  type="button"
  className="coupon-btn"
  onClick={handleOpenCoupon}
>
  <RiCoupon2Line className="coupon-btn-icon" />
  <span>Pilih Kupon</span>
</button>

        </div>

        {/* Row Total */}
        <div className="pricing-row total">
          <span className="pricing-label">Total</span>
          <span className="pricing-value">
            ${total.toFixed(2)}
          </span>
        </div>
      </section>

      {/* TOMBBOL SCAN MEJA */}
      <div className="checkout-section">
        <button type="button" className="checkout-btn">
          Scan Meja
        </button>
      </div>
    </div>
  );
}

export default Cart;
