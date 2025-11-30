// src/components/OrderSuccess.jsx
import React from "react";
import "./OrderSuccess.css";       // ⬅️ PENTING: pastikan path & nama file persis
import { FaCheck } from "react-icons/fa";

const OrderSuccess = ({ onTrackOrder, onBackHome }) => {
  return (
    <div className="order-success-container">
      <main className="order-success-card">
        {/* ICON BESAR */}
        <div className="order-success-icon-wrapper">
          <div className="order-success-circle">
            <FaCheck className="order-success-icon" />
          </div>

          {/* confetti kecil */}
          <div className="order-success-confetti order-confetti-1" />
          <div className="order-success-confetti order-confetti-2" />
          <div className="order-success-confetti order-confetti-3" />
          <div className="order-success-confetti order-confetti-4" />
        </div>

        {/* TEKS */}
        <h1 className="order-success-title">
          Your Order has been accepted
        </h1>
        <p className="order-success-subtitle">
          Your items has been placed and is on
          it&apos;s way to being processed.
        </p>

        {/* TOMBOL */}
        <button
          type="button"
          className="order-success-primary-btn"
          onClick={onTrackOrder}
        >
          Track Order
        </button>

        <button
          type="button"
          className="order-success-secondary-btn"
          onClick={onBackHome}
        >
          Back to home
        </button>
      </main>
    </div>
  );
};

export default OrderSuccess;
