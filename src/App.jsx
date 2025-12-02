// src/App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";

import kopiImg from "./assets/kopi.png";

import { FaPlus, FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlineHome, MdHistory, MdOutlinePerson } from "react-icons/md";
import { GiCoffeeCup } from "react-icons/gi";
import Coupon from "./components/Coupon";
import Cart from "./components/Cart";
import Account from "./components/Account";
import History from "./components/History";
import LoginScreen from "./components/LoginScreen";
import ChangePassword from "./components/ChangePassword";
import RegisterScreen from "./components/RegisterScreen";
import VerificationScreen from "./components/VerificationScreen";
import ScanTable from "./components/ScanTable";
import OrderSuccess from "./components/OrderSuccess";
import Incentive from "./components/Incentive";


// ============== PRODUCT DETAIL (di dalam App) ==============
const ProductDetail = ({ item, onBack, onAddToCart }) => {
  if (!item) return null;

  return (
    <div className="product-detail-container">
      {/* header sengaja dikosongkan (tidak ada back, tidak ada title) */}
      <div className="content">
        <div className="product-detail-body">
          {/* Gambar kopi */}
          <div className="detail-image-wrapper">
            <img src={kopiImg} alt={item.name} className="detail-image" />
          </div>

          {/* Nama & deskripsi singkat */}
          <div className="detail-main-info">
            <h2 className="detail-main-title">{item.name}</h2>
            <p className="detail-main-desc">{item.desc}</p>
          </div>

          {/* Info dummy */}
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

          {/* Harga + ukuran */}
          <div className="detail-price-row">
            <div>
              <p className="detail-price-label">Harga</p>
              <p className="detail-price-value">
                ${item.price.toFixed(2)}
              </p>
            </div>
            <p className="detail-volume">Cup 350 ml</p>
          </div>

          {/* Tombol Add To Cart */}
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

// ============== DATA DUMMY PRODUK ==============
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

// helper ambil page awal dari URL ?page=
const getInitialPage = () => {
  if (typeof window === "undefined") return "login";
  const params = new URLSearchParams(window.location.search);
  return params.get("page") || "login";
};

// ============== ROOT APP =======================
function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [historyOrders, setHistoryOrders] = useState([]);

  // sinkron currentPage -> URL ?page=
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", currentPage);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);
  }, [currentPage]);

  // sinkron tombol back browser -> currentPage
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const page = params.get("page") || "login";
      setCurrentPage(page);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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
        .filter((item) => item.qty > 0)
    );
  };

  // hapus item
  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ketika user klik "Track Order" di halaman sukses
  const handleTrackOrder = () => {
    if (!cartItems.length) {
      setCurrentPage("history");
      return;
    }

    setHistoryOrders((prev) => {
      const newOrder = {
        id: Date.now(),
        queueNumber: 56 + prev.length, // contoh antrian mulai 56
        status: "pending",
        items: cartItems.map((item) => ({
          name: item.name,
          qty: item.qty,
          price: (item.price || 0) * (item.qty || 0),
        })),
      };
      return [...prev, newOrder];
    });

    setCartItems([]);
    setCurrentPage("history");
  };

  // pilih halaman yang dirender
  const renderPage = () => {
    switch (currentPage) {
      // ====== AUTH PAGES ======
      case "login":
        return (
          <LoginScreen
            onLogin={() => setCurrentPage("verify")}
            onGoRegister={() => setCurrentPage("register")}
          />
        );

      case "register":
        return (
          <RegisterScreen
            onBack={() => setCurrentPage("login")}
            onRegistered={() => setCurrentPage("verify")}
          />
        );

      case "verify":
        return (
          <VerificationScreen
            onBack={() => setCurrentPage("login")}
            onVerified={() => setCurrentPage("home")}
          />
        );

      // ====== PAGE LAIN ======
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
            onOpenCoupon={() => setCurrentPage("coupon")}
            onScanTable={() => setCurrentPage("scanTable")}
            onPay={() => setCurrentPage("orderSuccess")}
          />
        );

      case "scanTable":
        return (
          <ScanTable
            onBack={() => setCurrentPage("cart")}
            onConfirm={() => {
              // nanti bisa dihubungkan ke backend
              setCurrentPage("cart");
            }}
          />
        );

      case "coupon":
        return (
          <Coupon
            onBack={() => setCurrentPage("cart")}
            onUseCoupon={(coupon) => {
              alert(`Kupon "${coupon.title}" digunakan (dummy)`);
              setCurrentPage("cart");
            }}
          />
        );

      case "orderSuccess":
        return (
          <OrderSuccess
            onTrackOrder={handleTrackOrder}
            onBackHome={() => setCurrentPage("home")}
          />
        );

      case "account":
  return (
    <Account
      onChangePassword={() => setCurrentPage("changePassword")}
      onLogout={() => {
        setCartItems([]);
        setSelectedItem(null);
        setCurrentPage("login");
      }}
      onOpenIncentive={() => setCurrentPage("incentive")} // ✅
      onOpenPromo={() => setCurrentPage("coupon")}        // ✅
    />
  );

  case "incentive":                             // 👈 tambah di sini
      return <Incentive onBack={() => setCurrentPage("account")} />;

      case "changePassword":
        return (
          <ChangePassword onBack={() => setCurrentPage("account")} />
        );

      case "history":
        return (
          <History
            onBack={() => setCurrentPage("home")}
            orders={historyOrders}
          />
        );

      // ====== DEFAULT: HOME ======
            // ====== DEFAULT: HOME ======
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
              {/* header-actions DIHAPUS dari sini */}
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
                          e.stopPropagation();
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

            {/* CART MENGAMBANG DI BAWAH KANAN */}
            <div className="floating-cart">
              <button
                className="cart-icon-btn"
                onClick={() => setCurrentPage("cart")}
              >
                <FaShoppingCart />
              </button>
            </div>
          </>
        );

    }
  };

  const authPages = ["login", "register", "verify"];
  const isAuthPage = authPages.includes(currentPage);

  return (
    <div className="app-root">
      <div className="phone-shell">
        {renderPage()}

        {!isAuthPage && (
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

            <button
              className={`nav-item ${
                currentPage === "history" ? "active" : ""
              }`}
              onClick={() => setCurrentPage("history")}
            >
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
        )}
      </div>
    </div>
  );
}

export default App;
