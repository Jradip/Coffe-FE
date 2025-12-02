// src/components/RegisterScreen.jsx
import React, { useState } from "react";
import "./Auth.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { GiCoffeeCup } from "react-icons/gi";

const RegisterScreen = ({ onBack, onRegistered }) => {
  const [name, setName] = useState("Afsar Hossen");
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // nanti tinggal dihubungkan ke backend
    if (onRegistered) {
      onRegistered({ name, email, password });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        {/* HEADER */}
        <header className="auth-header">
          <div className="auth-status-bar">9:41</div>

          <div className="auth-logo-wrapper">
            <div className="auth-logo-circle">
              <GiCoffeeCup className="auth-logo-icon" />
            </div>
          </div>

          <div className="auth-title-group">
            <h1 className="auth-title">Sign Up</h1>
            <p className="auth-subtitle">
              Enter your credentials to continue
            </p>
          </div>
        </header>

        {/* FORM REGISTER */}
        <main className="auth-main">
          <form onSubmit={handleSubmit} className="auth-form">
            {/* USERNAME */}
            <label className="auth-field">
              <span className="auth-label">Username</span>
              <input
                type="text"
                className="auth-input"
                placeholder="Enter your username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

            {/* EMAIL */}
            <label className="auth-field">
              <span className="auth-label">Email</span>
              <input
                type="email"
                className="auth-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            {/* PASSWORD */}
            <label className="auth-field">
              <span className="auth-label">Password</span>
              <div className="auth-password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className="auth-input auth-password-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </label>

            {/* TOMBOL SIGN UP */}
            <button type="submit" className="auth-primary-btn">
              Sign Up
            </button>
          </form>

          {/* FOOTER: KEMBALI KE LOGIN */}
          <p className="auth-footer-text">
            Sudah punya account?{" "}
            <button
              type="button"
              className="auth-link-button auth-link-strong"
              onClick={onBack}
            >
              Log in
            </button>
          </p>
        </main>
      </div>
    </div>
  );
};

export default RegisterScreen;
