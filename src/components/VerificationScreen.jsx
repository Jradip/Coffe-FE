// src/components/VerificationScreen.jsx
import React, { useState } from "react";
import "./Auth.css";
import { FaArrowLeft } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const VerificationScreen = ({ onBack, onVerified }) => {
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    // nanti ini bisa dihubungkan ke backend untuk verifikasi OTP
    if (onVerified) {
      onVerified(code);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        {/* HEADER VERIFIKASI */}
        <header className="verify-header">
          <button
            type="button"
            className="verify-back-btn"
            onClick={onBack}
          >
            <FaArrowLeft />
          </button>
          <span className="verify-time">9:41</span>
          <span className="verify-placeholder" />
        </header>

        {/* KONTEN UTAMA */}
        <main className="auth-main">
          <div className="verify-text-block">
            <h1 className="verify-title">Enter your 4-digit code</h1>
            <p className="verify-subtitle">Code</p>
          </div>

          <label className="verify-code-label">
            <input
              type="text"
              maxLength={4}
              value={code}
              onChange={(e) =>
                setCode(e.target.value.replace(/[^0-9]/g, ""))
              }
              className="verify-code-input"
              placeholder="- - - -"
            />
          </label>

          <div className="verify-row-bottom">
            <button type="button" className="verify-resend">
              Resend Code
            </button>

            <button
              type="button"
              className="verify-submit-btn"
              onClick={handleSubmit}
            >
              <FiArrowRight />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VerificationScreen;
