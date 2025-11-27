// src/components/ChangePassword.jsx
import React, { useState } from "react";
import "./ChangePassword.css";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePassword = ({ onBack }) => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="change-password-container">
      {/* HEADER */}
      <header className="cp-header">
        <div className="cp-header-top">
          <button className="cp-back-btn" onClick={onBack}>
            <FaArrowLeft />
          </button>
          <span className="cp-time">9:41</span>
          <span className="cp-header-placeholder" />
        </div>
        <h1 className="cp-title">Ganti password</h1>
      </header>

      {/* KONTEN FORM */}
      <main className="cp-content">
        {/* Password Lama */}
        <div className="cp-field">
          <label className="cp-label">Password Lama</label>
          <div className="cp-input-wrapper">
            <input
              type={showOld ? "text" : "password"}
              className="cp-input"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="cp-eye-btn"
              onClick={() => setShowOld((v) => !v)}
            >
              {showOld ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Password Baru */}
        <div className="cp-field">
          <label className="cp-label">Password Baru</label>
          <div className="cp-input-wrapper">
            <input
              type={showNew ? "text" : "password"}
              className="cp-input"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="cp-eye-btn"
              onClick={() => setShowNew((v) => !v)}
            >
              {showNew ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Konfirmasi Password */}
        <div className="cp-field">
          <label className="cp-label">Konfirmasi Password</label>
          <div className="cp-input-wrapper">
            <input
              type={showConfirm ? "text" : "password"}
              className="cp-input"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="cp-eye-btn"
              onClick={() => setShowConfirm((v) => !v)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Tombol Konfirmasi */}
        <button type="button" className="cp-submit-btn">
          Konfirmasi
        </button>
      </main>
    </div>
  );
};

export default ChangePassword;
