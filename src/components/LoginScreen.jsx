// src/components/LoginScreen.jsx
import React, { useState } from "react";
import "./Auth.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { GiCoffeeCup } from "react-icons/gi";

const LoginScreen = ({ onLogin, onGoRegister }) => {
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // nanti bisa diganti logic ke BE
    if (onLogin) onLogin({ email, password });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        {/* HEADER SEDERHANA */}
        <header className="auth-header">
          <div className="auth-status-bar">9:41</div>

          <div className="auth-logo-wrapper">
            <div className="auth-logo-circle">
              <GiCoffeeCup className="auth-logo-icon" />
            </div>
          </div>

          <div className="auth-title-group">
            <h1 className="auth-title">Login</h1>
            <p className="auth-subtitle">
              Enter your email and password to continue
            </p>
          </div>
        </header>

        {/* FORM LOGIN */}
        <main className="auth-main">
          <form onSubmit={handleSubmit} className="auth-form">
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

            {/* LUPA PASSWORD (DUMMY) */}
            <div className="auth-forgot-row">
              <button type="button" className="auth-link-button">
                Lupa Password?
              </button>
            </div>

            {/* TOMBOL LOGIN */}
            <button type="submit" className="auth-primary-btn">
              Log In
            </button>
          </form>

          {/* FOOTER: LINK KE REGISTER */}
          <p className="auth-footer-text">
            Tidak punya account?{" "}
            <button
              type="button"
              className="auth-link-button auth-link-strong"
              onClick={onGoRegister}
            >
              Sign up
            </button>
          </p>
        </main>
      </div>
    </div>
  );
};

export default LoginScreen;
