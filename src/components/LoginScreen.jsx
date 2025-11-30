// src/components/LoginScreen.jsx
import React, { useState } from "react";
import "./Auth.css";
import { GiCoffeeCup } from "react-icons/gi";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const LoginScreen = ({ onLogin, onGoRegister }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-status-bar">9:41</div>

      <main className="auth-main">
        <div className="auth-logo-circle">
          <GiCoffeeCup className="auth-logo-icon" />
        </div>

        <div>
          <h1 className="auth-title">Log in</h1>
          <p className="auth-subtitle">Enter your email and password</p>
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

        <p className="auth-link-right">Lupa Password?</p>

        <button
          type="button"
          className="auth-primary-btn"
          onClick={onLogin}
        >
          Log In
        </button>

        <p className="auth-bottom-text">
          Tidak Punya Account?
          <button
            type="button"
            className="auth-bottom-link"
            onClick={onGoRegister}
          >
            Sign Up
          </button>
        </p>
      </main>
    </div>
  );
};

export default LoginScreen;
