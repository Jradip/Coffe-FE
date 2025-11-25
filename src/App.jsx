// src/App.jsx
import React, { useState } from "react";
import "./App.css";
import kopiImg from "./assets/kopi.png";

import { FaPlus, FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlineHome, MdHistory, MdOutlinePerson } from "react-icons/md";
import { GiCoffeeCup } from "react-icons/gi";
import Cart from "./components/Cart"; 
import Account from "./components/Account"; // ⬅️ pakai Account eksternal

// ============== PRODUCT DETAIL ==============
const ProductDetail = ({ item, onBack, onAddToCart }) => {
  if (!item) return null; // jaga-jaga

  return (
    <div className="product-detail-container">
      <header className="product-header">
        <button className="back-btn" onClick={onBack}>
          ←
        </button>
        <h1 className="product-title">Product Detail</h1>
        <button className="wishlist-btn">♡</button>
      </header>

      <div className="content">
        <div className="product-detail-body">
          <div className="detail-image-wrapper">
            <img
              src={kopiImg}
              alt={item.name}
              className="detail-image"
            />
          </div>

          <div className="detail-main-info">
            <h2 className="detail-main-title">{item.name}</h2>
            <p className="detail-main-desc">{item.desc}</p>
          </div>

          <div className="detail-meta-grid">
            <div>
              <p className="detail-meta-label">Roast</p>
              <p>Medium roast</p>
            </div>
            <div>
              <p className="detail-meta-label">Rasa</p>
              <p>Manis, fruity, karamel</p>
            </div>
            <div>
              <p className="detail-meta-label">Origin</p>
              <p>Blend Sumatra &amp; Colombia</p>
            </div>
            <div>
              <p className="detail-meta-label">Kafein</p>
              <p>Sedang</p>
            </div>
          </div>

          <div className="detail-price-row">
            <div>
              <p className="detail-price-label">Harga</p>
              <p className="detail-price-value">
                ${item.price.toFixed(2)}
              </p>
            </div>
            <p className="detail-volume">Cup 350 ml</p>
          </div>

          <button
            type="button"
            className="detail-add-btn"
            onClick={() => onAddToCart(item)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// ============== DATA DUMMY ==============
const items = [
  {
    id: 1,
    name: "Organic Bananas",
    desc: "Makanan yang di balur ....",
    price: 4.99,
  },
  {
    id: 2,
    name: "Red Apples",
    desc: "Buah segar dan manis ....",
    price: 3.99,
  },
  {
    id: 3,
    name: "Fresh Orange",
    desc: "Jeruk segar vitamin C ....",
    price: 2.99,
  },
  {
    id: 4,
    name: "Sweet Strawberry",
    desc: "Strawberry manis segar ....",
    price: 5.99,
  },
];

// ============== ROOT APP ==============
function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // buka halaman detail dari home
  const handleOpenDetail = (item) => {
    setSelectedItem(item);
    setCurrentPage("productDetail");
  };

  // tambah ke keranjang + langsung ke halaman cart
  const handleAddToCart = (item) => {
    if (!item) return;

    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });

    setCurrentPage("cart");
  };

  // ubah qty (+1 / -1)
  const handleUpdateQty = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0) // kalau qty 0, auto hilang
    );
  };

  // hapus item
  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const renderPage = () => {
    switch (currentPage) {
      case "productDetail":
        return (
          <ProductDetail
            item={selectedItem}
            onBack={() => setCurrentPage("home")}
            onAddToCart={handleAddToCart}
          />
        );
      case "cart":
        return (
          <Cart
            items={cartItems}
            onBack={() => setCurrentPage("home")}
            onIncrement={(id) => handleUpdateQty(id, 1)}
            onDecrement={(id) => handleUpdateQty(id, -1)}
            onRemove={handleRemoveItem}
          />
        );
      case "account":
        return <Account onBack={() => setCurrentPage("home")} />;
      default:
        return (
          <>
            <header className="home-header">
              <div className="logo-wrapper">
                <div className="logo-circle">
                  <GiCoffeeCup className="logo-icon" />
                </div>
                <span className="brand-name">Kedai Gen-Z</span>
              </div>
              <div className="brand-underline" />
              <div className="header-actions">
                <button
                  className="cart-icon-btn"
                  onClick={() => setCurrentPage("cart")}
                >
                  <FaShoppingCart />
                </button>
              </div>
            </header>

            <div className="search-row">
              <div className="search-box">
                <CiSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                />
              </div>
              <button className="filter-btn" aria-label="Filter">
                ⚙
              </button>
            </div>

            <main className="content">
              <h2 className="section-title">Menu</h2>

              <div className="card-grid">
                {items.map((item) => (
                  <article
                    key={item.id}
                    className="product-card"
                    onClick={() => handleOpenDetail(item)}
                  >
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
                        aria-label="Tambah ke keranjang"
                        onClick={(e) => {
                          e.stopPropagation(); // biar gak buka detail
                          handleAddToCart(item);
                        }}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </main>
          </>
        );
    }
  };

  return (
    <div className="app-root">
      <div className="phone-shell">
        {renderPage()}

        <nav className="bottom-nav">
          <button
            className={`nav-item ${
              currentPage === "home" ? "active" : ""
            }`}
            onClick={() => setCurrentPage("home")}
          >
            <MdOutlineHome className="nav-icon" />
            <span className="nav-label">Home</span>
          </button>
          <button className="nav-item">
            <MdHistory className="nav-icon" />
            <span className="nav-label">History</span>
          </button>
          <button
            className={`nav-item ${
              currentPage === "account" ? "active" : ""
            }`}
            onClick={() => setCurrentPage("account")}
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
