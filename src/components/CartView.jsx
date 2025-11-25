// src/components/CartView.jsx
import React from "react";
import kopiImg from "../assets/kopi.png";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";

function CartView({ items = [], onIncrement, onDecrement, onRemove }) {
  if (!items.length) {
    return (
      <div
        style={{
          textAlign: "center",
          color: "#999",
          fontSize: "14px",
          padding: "24px 0",
        }}
      >
        Keranjang masih kosong. Tambahkan kopi dari halaman detail.
      </div>
    );
  }

  return (
    <ul className="cart-items-list">
      {items.map((item) => (
        <li className="cart-item" key={item.id}>
          <div className="item-image">
            <img src={kopiImg} alt={item.name} />
          </div>

          <div className="item-details">
            <p className="item-name">{item.name}</p>
            <p className="item-weight">1 cup · {item.desc}</p>
            <p className="item-price">
              ${(item.price * item.qty).toFixed(2)}
            </p>
          </div>

          <div className="item-controls">
            <div className="quantity-controls">
              <button
                type="button"
                className="quantity-btn"
                onClick={() => onDecrement && onDecrement(item.id)}
                aria-label="Kurangi jumlah"
              >
                <FiMinus />
              </button>
              <span className="quantity">{item.qty}</span>
              <button
                type="button"
                className="quantity-btn"
                onClick={() => onIncrement && onIncrement(item.id)}
                aria-label="Tambah jumlah"
              >
                <FiPlus />
              </button>
            </div>
            <button
              type="button"
              className="remove-btn"
              onClick={() => onRemove && onRemove(item.id)}
              aria-label="Hapus item"
            >
              <FiX />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CartView;
