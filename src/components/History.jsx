// src/components/History.jsx
import React from "react";
import "./History.css";
import { GiCoffeeCup } from "react-icons/gi";

const History = ({ onBack, orders = [] }) => {
  // kalau sudah ada data dari pembayaran, pakai itu
  // kalau belum ada, pakai dummy agar tampilan tidak kosong
  const data = orders.length
    ? orders
    : [
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
        {
          id: 2,
          queueNumber: 57,
          status: "pending",
          items: [
            { name: "Organic Bananas 1", qty: 1, price: 400000 },
            { name: "Organic Bananas 1", qty: 1, price: 400000 },
            { name: "Organic Bananas 1", qty: 1, price: 400000 },
          ],
        },
      ];

  return (
    <div className="history-container">
      {/* HEADER DIHAPUS – langsung brand/logo saja */}
      <div className="history-brand">
        <div className="history-logo-circle">
          <GiCoffeeCup className="history-logo-icon" />
        </div>
        <span className="history-brand-name">Kedai Gen-Z</span>
      </div>

      <main className="history-content">
        {data.map((order) => {
          const total = order.items.reduce(
            (sum, item) => sum + (item.price || 0),
            0
          );

          return (
            <section key={order.id} className="history-card">
              <div className="history-card-header">
                <span>Antrian : {order.queueNumber}</span>
                <span className="history-status">{order.status}</span>
              </div>

              <div className="history-card-body">
                {order.items.map((it, idx) => (
                  <div key={idx} className="history-item-row">
                    <span>{it.name}</span>
                    <span>Rp. {it.price.toLocaleString("id-ID")}</span>
                  </div>
                ))}
              </div>

              <div className="history-card-footer">
                <span>Total :</span>
                <span>Rp. {total.toLocaleString("id-ID")}</span>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default History;
