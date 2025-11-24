import "./App.css";
import kopiImg from "./assets/kopi.png";

import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlineHome, MdHistory, MdOutlinePerson } from "react-icons/md";

const items = [
  {
    id: 1,
    name: "Organic Bananas",
    desc: "Makanan yang di balur ....",
    price: 4.99,
  },
  {
    id: 2,
    name: "Organic Bananas",
    desc: "Makanan yang di balur ....",
    price: 4.99,
  },
  {
    id: 3,
    name: "Organic Bananas",
    desc: "Makanan yang di balur ....",
    price: 4.99,
  },
  {
    id: 4,
    name: "Organic Bananas",
    desc: "Makanan yang di balur ....",
    price: 4.99,
  },
];

function App() {
  return (
    <div className="app-root">
      <div className="phone-shell">
        {/* HEADER TOKO */}
        <header className="home-header">
          <div className="logo-wrapper">
            <div className="logo-circle">
              <img src={kopiImg} alt="Logo Kedai" className="logo-img" />
            </div>
            <span className="brand-name">Kedai Gen-Z</span>
          </div>
          <div className="brand-underline" />
        </header>

        {/* SEARCH */}
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

        {/* KONTEN */}
        <main className="content">
          <h2 className="section-title">Makanan</h2>

          <div className="card-grid">
            {items.map((item) => (
              <article key={item.id} className="product-card">
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
                  <button className="add-btn" aria-label="Tambah ke keranjang">
                    <FaPlus />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </main>

        {/* BOTTOM NAV – sekarang di dalam phone-shell */}
        <nav className="bottom-nav">
          <button className="nav-item active">
            <MdOutlineHome className="nav-icon" />
            <span className="nav-label">Home</span>
          </button>
          <button className="nav-item">
            <MdHistory className="nav-icon" />
            <span className="nav-label">History</span>
          </button>
          <button className="nav-item">
            <MdOutlinePerson className="nav-icon" />
            <span className="nav-label">Akun</span>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default App;
