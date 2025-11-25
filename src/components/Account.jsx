// src/components/Account.jsx
import React from "react";
import "./Account.css";
import {
  FaArrowLeft,
  FaWallet,
  FaTicketAlt,
  FaLock,
  FaChevronRight,
  FaSignOutAlt,
} from "react-icons/fa";

const Account = ({ onBack }) => {
  const user = {
    name: "Afscr Hossen",
    email: "imshuvc97@gmail.com",
    avatar: "/api/placeholder/80/80",
  };

  const saldo = 250000; // contoh saldo
  const kupon = 3; // contoh jumlah kupon

  const handleLogout = () => {
    // sementara hanya dummy, nanti bisa dihubungkan ke auth asli
    // misalnya: clear token, redirect ke halaman login, dll.
    alert("Logout berhasil (dummy). Silakan hubungkan ke logic auth Anda 🙂");
  };

  return (
    <div className="account-container">
      {/* HEADER */}
      <header className="account-header">
        <div className="header-top">
          <button className="back-btn" onClick={onBack}>
            <FaArrowLeft />
          </button>
          <span className="status-time">9:41</span>
          <span className="header-placeholder" />
        </div>
        <h1 className="account-title">Account</h1>
      </header>

      {/* KONTEN */}
      <main className="account-content">
        {/* PROFILE */}
        <section className="profile-section">
          <div className="profile-card">
            <div className="avatar-container">
              <img src={user.avatar} alt={user.name} className="avatar" />
            </div>
            <div className="profile-info">
              <p className="user-name">{user.name}</p>
              <p className="user-email">{user.email}</p>
            </div>
          </div>
        </section>

        {/* SALDO + KUPON */}
        <section className="summary-section">
          <div className="summary-card">
            <div className="summary-icon">
              <FaWallet />
            </div>
            <div>
              <p className="summary-label">Saldo</p>
              <p className="summary-value">
                Rp {saldo.toLocaleString("id-ID")}
              </p>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon">
              <FaTicketAlt />
            </div>
            <div>
              <p className="summary-label">Kupon</p>
              <p className="summary-value">{kupon} Kupon</p>
            </div>
          </div>
        </section>

        {/* GANTI PASSWORD */}
        <section className="menu-section">
          <button
            type="button"
            className="menu-item"
            onClick={() => console.log("Ganti Password clicked")}
          >
            <div className="menu-item-left">
              <div className="menu-icon">
                <FaLock />
              </div>
              <div className="menu-content">
                <p className="menu-title">Ganti Password</p>
                <p className="menu-description">
                  Ubah kata sandi akun Anda
                </p>
              </div>
            </div>
            <div className="menu-arrow">
              <FaChevronRight />
            </div>
          </button>
        </section>

        {/* LOGOUT DI PALING BAWAH */}
        <section className="logout-section">
          <button
            type="button"
            className="logout-btn"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="logout-icon" />
            <span>Logout</span>
          </button>
        </section>
      </main>
    </div>
  );
};

export default Account;
