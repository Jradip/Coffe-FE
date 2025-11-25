import React from "react";
import "./History.css";

/**
 * Component History (standalone)
 * Props:
 *  - onBack: function to call when user presses back (optional)
 *  - orders: optional array of order objects (if not provided, component uses demo data)
 *
 * Order shape:
 *  {
 *    id: number|string,
 *    queue: number,
 *    status: "pending" | "completed" | string,
 *    items: [{ name: string, price: number }],
 *  }
 *
 * Note: image src uses a local uploaded file path:
 * "/mnt/data/8e3d10fe-e4c7-42be-b4d3-4cb2fa65f4d7.png"
 */

function formatIDR(n) {
  if (typeof n !== "number") return n;
  return "Rp. " + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default function History({ onBack = () => {}, orders: propOrders = null }) {
  // fallback demo data (used when parent doesn't pass orders)
  const demoOrders = [
    {
      id: 1,
      queue: 56,
      status: "pending",
      items: [
        { name: "Organic Bananas 1", price: 400000 },
        { name: "Organic Bananas 1", price: 400000 },
        { name: "Organic Bananas 1", price: 400000 },
      ],
    },
    {
      id: 2,
      queue: 57,
      status: "pending",
      items: [
        { name: "Organic Bananas 1", price: 400000 },
        { name: "Organic Bananas 1", price: 400000 },
        { name: "Organic Bananas 1 with a longer name that wraps to multiple lines", price: 400000 },
      ],
    },
    {
      id: 3,
      queue: 58,
      status: "completed",
      items: [
        { name: "Organic Bananas 1", price: 400000 },
      ],
    },
  ];

  const orders = Array.isArray(propOrders) ? propOrders : demoOrders;

  return (
    <div className="history-page">
      <header className="history-header">
        <button className="back-btn" onClick={onBack} aria-label="Back">
          ←
        </button>

        <div className="logo-and-title">
          {/* Use the uploaded local image path as requested by you */}
          <div className="logo-circle-small">
            <img
              src="/mnt/data/8e3d10fe-e4c7-42be-b4d3-4cb2fa65f4d7.png"
              alt="Kedai Gen-Z"
              className="logo-img-small"
            />
          </div>

          <div className="brand-name">Kedai Gen-Z</div>
        </div>

        {/* placeholder right side keeps header balanced */}
        <div style={{ width: 36 }} />
      </header>

      <main className="history-content" role="main">
        {orders.map((o) => {
          const total = o.items.reduce((s, it) => s + (typeof it.price === "number" ? it.price : 0), 0);

          return (
            <article className="order-card" key={o.id} aria-label={`Order ${o.id}`}>
              <div className="order-top">
                <div className="queue">
                  Antrian : <strong>{o.queue}</strong>
                </div>
                <div className={`status-badge ${o.status === "pending" ? "pending" : "completed"}`}>
                  {o.status}
                </div>
              </div>

              <div className="order-items">
                {o.items.map((it, idx) => (
                  <div className="order-item" key={idx}>
                    <div className="item-name">{it.name}</div>
                    <div className="item-price">
                      {typeof it.price === "number" ? formatIDR(it.price) : it.price}
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-footer">
                <div className="total-label">Total :</div>
                <div className="total-value">{formatIDR(total)}</div>
              </div>
            </article>
          );
        })}
      </main>
    </div>
  );
}
