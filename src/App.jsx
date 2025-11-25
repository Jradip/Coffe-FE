import React, { useState } from 'react';
import "./App.css";
import kopiImg from "./assets/kopi.png";

import { FaPlus, FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlineHome, MdHistory, MdOutlinePerson } from "react-icons/md";

// Komponen sederhana untuk demo
const ProductDetail = ({ onBack }) => {
  return (
    <div className="product-detail-container">
      <header className="product-header">
        <button className="back-btn" onClick={onBack}>
          ←
        </button>
        <h1 className="product-title">Product Detail</h1>
        <button className="wishlist-btn">
          ♡
        </button>
      </header>
      <div className="content">
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Apple La Coronia</h2>
          <p>Halaman Product Detail</p>
        </div>
      </div>
    </div>
  );
};

const Cart = ({ onBack }) => {
  return (
    <div className="cart-container">
      <header className="cart-header">
        <button className="back-btn" onClick={onBack}>
          ←
        </button>
        <h1 className="product-title">My Cart</h1>
        <div className="header-actions">
          <button className="search-btn">🔍</button>
          <button className="delete-all-btn">🗑</button>
        </div>
      </header>
      <div className="content">
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Scan Maja</h2>
          <p>Halaman Cart</p>
        </div>
      </div>
    </div>
  );
};

const Account = ({ onBack }) => {
  return (
    <div className="account-container">
      <header className="account-header">
        <div className="header-top">
          <button className="back-btn" onClick={onBack}>
            ←
          </button>
          <div className="time">9:41</div>
          <div className="header-placeholder"></div>
        </div>
        <h1 className="account-title">Account</h1>
      </header>
      <div className="content">
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Afscr Hossen</h2>
          <p>imshuvc97@gmail.com</p>
          <p>Halaman Account</p>
        </div>
      </div>
    </div>
  );
};

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

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'productDetail':
        return <ProductDetail onBack={() => setCurrentPage('home')} />;
      case 'cart':
        return <Cart onBack={() => setCurrentPage('home')} />;
      case 'account':
        return <Account onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <>
            <header className="home-header">
              <div className="logo-wrapper">
                <div className="logo-circle">
                  <img src={kopiImg} alt="Logo Kedai" className="logo-img" />
                </div>
                <span className="brand-name">Kedai Gen-Z</span>
              </div>
              <div className="brand-underline" />
              <div className="header-actions">
                <button 
                  className="cart-icon-btn"
                  onClick={() => setCurrentPage('cart')}
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
              <h2 className="section-title">Makanan</h2>

              <div className="card-grid">
                {items.map((item) => (
                  <article 
                    key={item.id} 
                    className="product-card"
                    onClick={() => setCurrentPage('productDetail')}
                  >
                    <div className="product-image">
                      <img src={kopiImg} alt={item.name} className="product-img" />
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
                          e.stopPropagation();
                          console.log('Tambah ke keranjang:', item.name);
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
            className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            <MdOutlineHome className="nav-icon" />
            <span className="nav-label">Home</span>
          </button>
          <button className="nav-item">
            <MdHistory className="nav-icon" />
            <span className="nav-label">History</span>
          </button>
          <button 
            className={`nav-item ${currentPage === 'account' ? 'active' : ''}`}
            onClick={() => setCurrentPage('account')}
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