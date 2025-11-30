// src/components/RegisterScreen.jsx
import React, { useState } from "react";
import "./Auth.css";
import { GiCoffeeCup } from "react-icons/gi";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiCheck,
} from "react-icons/fi";

const RegisterScreen = ({ onBack, onRegistered }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-status-bar">9:41</div>

      <main className="auth-main">
        <div className="auth-logo-circle">
          <GiCoffeeCup className="auth-logo-icon" />
        </div>

        <div>
          <h1 className="auth-title">Sign Up</h1>
          <p className="auth-subtitle">Enter your credentials to continue</p>
        </div>

        {/* Username */}
        <div className="auth-field">
          <label className="auth-label">Username</label>
          <div className="auth-input-row">
            <FiUser className="auth-input-icon-left" />
            <input
              type="text"
              className="auth-input"
              placeholder="Your name"
            />
          </div>
        </div>

        {/* Email */}
        <div className="auth-field">
          <label className="auth-label">Email</label>
          <div className="auth-input-row">
            <FiMail className="auth-input-icon-left" />
            <input
              type="email"
              className="auth-input"
              placeholder="you@example.com"
            />
            <FiCheck className="auth-input-icon-right" />
          </div>
        </div>

        {/* Password */}
        <div className="auth-field">
          <label className="auth-label">Password</label>
          <div className="auth-input-row">
            <FiLock className="auth-input-icon-left" />
            <input
              type={showPassword ? "text" : "password"}
              className="auth-input"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="auth-input-icon-right"
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        <button
          type="button"
          className="auth-primary-btn"
          onClick={onRegistered}
        >
          Sign Up
        </button>

        <p className="auth-bottom-text">
          Sudah punya akun?
          <button
            type="button"
            className="auth-bottom-link"
            onClick={onBack}
          >
            Log In
          </button>
        </p>
      </main>
    </div>
  );
};

export default RegisterScreen;
