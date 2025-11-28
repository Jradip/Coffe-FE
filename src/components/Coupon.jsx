// src/components/Coupon.jsx
import React, { useState } from "react";
import "./Coupon.css";
import { FaArrowLeft } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiCoupon2Line } from "react-icons/ri";

const dummyCoupons = [
  {
    id: 1,
    title: "Organic Bananas",
    description:
      "Makanan yang di balur ashjhahjhsjjahjsjajsjsj sijikkkkkkkkkkkkkkkkkkk",
  },
  {
    id: 2,
    title: "Fresh Orange",
    description:
      "Diskon minuman jeruk segar kaya vitamin C untuk hari ini saja.",
  },
  {
    id: 3,
    title: "Coffee Lover",
    description: "Potongan harga spesial untuk setiap pembelian 2 cup kopi.",
  },
];

const Coupon = ({ onBack, onUseCoupon }) => {
  const [query, setQuery] = useState("");

  const filteredCoupons = dummyCoupons.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="coupon-container">
      {/* HEADER */}
      <header className="coupon-header">
        <div className="coupon-header-top">
          <button className="coupon-back-btn" onClick={onBack}>
            <FaArrowLeft />
          </button>
          <span className="coupon-time">9:41</span>
          <span className="coupon-header-placeholder" />
        </div>
        <h1 className="coupon-title">Kupon</h1>
      </header>

      {/* KONTEN */}
      <main className="coupon-content">
        {/* SEARCH */}
        <div className="coupon-search-wrapper">
          <FiSearch className="coupon-search-icon" />
          <input
            type="text"
            className="coupon-search-input"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* LIST KUPON */}
        <section className="coupon-list">
          {filteredCoupons.map((coupon) => (
            <article key={coupon.id} className="coupon-card">
              <div className="coupon-card-text">
                <h3 className="coupon-card-title">{coupon.title}</h3>
                <p className="coupon-card-desc">{coupon.description}</p>
              </div>
              <button
                type="button"
                className="coupon-use-btn"
                onClick={() =>
                  onUseCoupon
                    ? onUseCoupon(coupon)
                    : alert(`Kupon "${coupon.title}" digunakan (dummy)`)
                }
              >
                <RiCoupon2Line className="coupon-use-icon" />
                <span>Gunakan</span>
              </button>
            </article>
          ))}

          {filteredCoupons.length === 0 && (
            <p className="coupon-empty">Kupon tidak ditemukan.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Coupon;
