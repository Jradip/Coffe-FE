// src/App.jsx
import { useState } from "react";
import "./App.css";
import kopiImg from "./assets/kopi.png";

import { CiSearch } from "react-icons/ci";
import { GiCoffeeCup } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { MdOutlineHome, MdHistory, MdOutlinePerson } from "react-icons/md";

const items = [
  {
    id: 1,
    name: "Caffe Latte",
    desc: "Makanan yang di balur ....",
    price: 4.99,
    points: 25,
    detail:
      "Kopi susu dengan rasa lembut. Cocok dinikmati saat santai maupun bekerja.",
  },
  {
    id: 2,
    name: "Cappuccino",
    desc: "Makanan yang di balur ....",
    price: 4.99,
    points: 20,
    detail: "Perpaduan espresso dan susu dengan foam lembut di atasnya.",
  },
  {
    id: 3,
    name: "Mocha",
    desc: "Makanan yang di balur ....",
    price: 4.99,
    points: 18,
    detail:
      "Kopi cokelat manis, pas untuk kamu yang suka rasa creamy dan rich.",
  },
  {
    id: 4,
    name: "Americano",
    desc: "Makanan yang di balur ....",
    price: 4.99,
    points: 15,
    detail:
      "Espresso dengan tambahan air panas, rasa kopi yang kuat dan bersih.",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState("home"); // 'home' | 'detail' | 'cart' | 'akun'
  const [cartItems, setCartItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const openDetail = (item) => {
    setSelectedItem(item);
    setCurrentPage("detail");
  };

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [
        ...prev,
        { id: item.id, name: item.name, price: item.price, qty: 1 },
      ];
    });

    setCurrentPage("cart");
  };

  const incrementQty = (id) => {
    setCartItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
    );
  };

  const decrementQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  const totalCartPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="app-root">
      <div className="phone-shell">
        {/* HEADER TOKO (SELALU SAMA DI SEMUA HALAMAN) */}
        <header className="home-header">
          <div className="logo-wrapper">
            <div className="logo-circle">
              <GiCoffeeCup className="logo-icon" />
            </div>
            <span className="brand-name">Kedai Gen-Z</span>
          </div>
          <div className="brand-underline" />
        </header>

        {/* SEARCH – hanya di HOME */}
        {currentPage === "home" && (
          <div className="search-row">
            <div className="search-box">
              <CiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="filter-btn" aria-label="Filter">
              ⚙
            </button>
          </div>
        )}

        {/* AREA KONTEN – dibungkus .content + .page supaya lebar konsisten */}
        <main className="content">
          <div className="page">
            {/* ========== HOME ========== */}
            {currentPage === "home" && (
              <>
                <h2 className="section-title">Makanan</h2>
                <div className="card-grid">
                  {filteredItems.map((item) => (
                    <article key={item.id} className="product-card">
                      <div className="product-image">
                        <img
                          src={kopiImg}
                          alt={item.name}
                          className="product-img"
                        />
                      </div>
                      <div className="product-info">
                        <h3 className="product-name">{item.name}</h3>
                        <p className="product-desc">{item.desc}</p>
                      </div>
                      <div className="product-footer">
                        <span className="product-price">
                          ${item.price.toFixed(2)}
                        </span>
                        <button
                          className="add-btn"
                          aria-label="Lihat detail"
                          onClick={() => openDetail(item)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}

           {/* ========== DETAIL ========== */}
{currentPage === "detail" && selectedItem && (
  <div className="detail-page">
    <div className="detail-image">
      <img src={kopiImg} alt={selectedItem.name} />
    </div>

    <div className="detail-main">
      <div className="detail-header-row">
        <div>
          <h2 className="detail-name">{selectedItem.name}</h2>
          <p className="detail-points">
            Point: {selectedItem.points ?? 0}
          </p>
        </div>
        <div className="detail-price">
          ${selectedItem.price.toFixed(2)}
        </div>
      </div>

      <div className="detail-section">
        <h3 className="detail-section-title">Product Detail</h3>
        <p className="detail-text">{selectedItem.detail}</p>
      </div>

      {/* TOMBOL ADD TO CART DENGAN ICON DI DALAMNYA */}
      <button
        className="detail-add-btn"
        onClick={() => handleAddToCart(selectedItem)}
      >
        <BsCart4 className="detail-add-icon" />
        <span>Add To Cart</span>
      </button>
    </div>
  </div>
)}

            {/* ========== CART (HISTORY) ========== */}
            {currentPage === "cart" && (
              <div className="cart-page">
                <h2 className="cart-title">Keranjang</h2>

                {cartItems.length === 0 ? (
                  <div className="cart-list cart-list-empty">
                    <p className="cart-empty">Keranjang masih kosong.</p>
                  </div>
                ) : (
                  <>
                    <div className="cart-list">
                      {cartItems.map((item) => (
                        <div className="cart-row" key={item.id}>
                          <div className="cart-main">
                            <div className="cart-name">{item.name}</div>
                            <div className="qty-control">
                              <button
                                className="qty-btn"
                                onClick={() => decrementQty(item.id)}
                              >
                                -
                              </button>
                              <span className="qty-value">{item.qty}</span>
                              <button
                                className="qty-btn"
                                onClick={() => incrementQty(item.id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="cart-side">
                            <button
                              className="cart-remove"
                              onClick={() => removeFromCart(item.id)}
                            >
                              ×
                            </button>
                            <div className="cart-price">
                              ${(item.price * item.qty).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="cart-total-row">
                      <span>Total</span>
                      <span className="cart-total-price">
                        ${totalCartPrice.toFixed(2)}
                      </span>
                    </div>

                    <button className="cart-checkout-btn">Checkout</button>
                  </>
                )}
              </div>
            )}

            {/* ========== AKUN (placeholder) ========== */}
            {currentPage === "akun" && (
              <div className="cart-page">
                <h2 className="cart-title">Akun</h2>
                <p className="cart-empty">
                  Halaman akun belum diimplementasikan.
                </p>
              </div>
            )}
          </div>
        </main>

        {/* BOTTOM NAV – selalu sama */}
        <nav className="bottom-nav">
          <button
            className={`nav-item ${currentPage === "home" ? "active" : ""}`}
            onClick={() => setCurrentPage("home")}
          >
            <MdOutlineHome className="nav-icon" />
            <span className="nav-label">Home</span>
          </button>

          <button
            className={`nav-item ${currentPage === "cart" ? "active" : ""}`}
            onClick={() => setCurrentPage("cart")}
          >
            <MdHistory className="nav-icon" />
            <span className="nav-label">History</span>
          </button>

          <button
            className={`nav-item ${currentPage === "akun" ? "active" : ""}`}
            onClick={() => setCurrentPage("akun")}
          >
            <MdOutlinePerson className="nav-icon" />
            <span className="nav-label">Akun</span>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default App;
