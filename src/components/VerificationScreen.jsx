// src/components/VerificationScreen.jsx
import React, { useState } from "react";
import "./Auth.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const VerificationScreen = ({ onBack, onVerified }) => {
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    // nanti dihubungkan ke backend untuk cek OTP
    if (onVerified) onVerified(code);
  };

  return (
    <div className="auth-container">
      {/* HEADER ATAS DENGAN ARROW BESAR */}
      <div className="verify-header">
        <button className="verify-back-btn" onClick={onBack}>
          <FaArrowLeft />
        </button>
        <span className="verify-time">9:41</span>
        <span className="verify-placeholder" />
      </div>

      {/* KONTEN VERIFIKASI */}
      <main className="auth-main">
        <div>
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
            <FaArrowRight />
          </button>
        </div>
      </main>
    </div>
  );
};

export default VerificationScreen;
