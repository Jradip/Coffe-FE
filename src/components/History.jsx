// src/components/History.jsx
import React from "react";
import "./History.css";
import { FaArrowLeft } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";

// Dummy data awal (kalau belum ada order dari user)
const dummyHistory = [
  {
    id: 1,
    queueNumber: 56,
    status: "pending",
    items: [
      { name: "Organic Bananas 1", qty: 1, price: 400000 },
      { name: "Organic Bananas 1", qty: 1, price: 400000 },
      { name: "Organic Bananas 1", qty: 1, price: 400000 },
    ],
  },
];

const formatRupiah = (value) =>
  `Rp. ${value.toLocaleString("id-ID", { minimumFractionDigits: 0 })}`;

const History = ({ onBack, orders = [] }) => {
  // kalau ada data dari App, pakai itu; kalau belum, pakai dummy
  const data = orders.length ? orders : dummyHistory;

  return (
    <div className="history-container">
      {/* HEADER */}
      <header className="history-header">
        <div className="history-header-top">
          <button className="history-back-btn" onClick={onBack}>
            <FaArrowLeft />
          </button>
          <span className="history-time">9:41</span>
          <span className="history-header-placeholder" />
        </div>
        <h1 className="history-title">History</h1>
      </header>

      {/* KONTEN */}
      <main className="history-content">
        {/* Logo + brand */}
        <div className="history-brand">
          <div className="history-logo-circle">
            <GiCoffeeCup className="history-logo-icon" />
          </div>
          <p className="history-brand-name">Kedai Gen-Z</p>
        </div>

        {/* LIST HISTORY */}
        <section className="history-list">
          {data.map((order) => {
            const total =
              order.total ??
              order.items.reduce((sum, item) => sum + (item.price || 0), 0);

            return (
              <article key={order.id} className="history-card">
                <div className="history-card-header">
                  <span className="history-queue">
                    Antrian : {order.queueNumber}
                  </span>
                  <span
                    className={`history-status history-status-${order.status}`}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="history-items">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="history-item-row">
                      <span className="history-item-name">
                        {item.name}
                        {item.qty > 1 ? ` x${item.qty}` : ""}
                      </span>
                      <span className="history-item-price">
                        {formatRupiah(item.price || 0)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="history-total-row">
                  <span className="history-total-label">Total :</span>
                  <span className="history-total-value">
                    {formatRupiah(total)}
                  </span>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default History;
