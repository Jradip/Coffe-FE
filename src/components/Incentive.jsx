// src/components/Incentive.jsx
import React from "react";
import "./Incentive.css";
import { FaMedal, FaInfoCircle, FaShieldAlt, FaArrowLeft } from "react-icons/fa";

const Incentive = ({ onBack }) => {
  return (
    <div className="incentive-page">
      <header className="incentive-header">
        <button type="button" className="incentive-back-btn" onClick={onBack}>
          <FaArrowLeft />
        </button>
      </header>

      <main className="incentive-main">
        <div className="incentive-card">
          {/* Current Incentive */}
          <div className="incentive-card-header">
            <div className="incentive-medal">
              <FaMedal />
            </div>
            <div className="incentive-header-text">
              <div className="incentive-header-top">
                <span className="incentive-title">Current Incentive</span>
                <FaInfoCircle className="incentive-info-icon" />
              </div>
              <div className="incentive-points-row">
                <span className="incentive-points">1050</span>
                <span className="incentive-points-unit">Points</span>
              </div>
            </div>
          </div>

          {/* Tier list */}
          <div className="incentive-tier-row">
            <div className="incentive-tier-left">
              <FaShieldAlt className="incentive-tier-icon bronze" />
              <span className="incentive-tier-name">Bronze</span>
            </div>
            <span className="incentive-tier-value">0</span>
          </div>

          <div className="incentive-tier-row">
            <div className="incentive-tier-left">
              <FaShieldAlt className="incentive-tier-icon silver" />
              <span className="incentive-tier-name">Silver</span>
            </div>
            <span className="incentive-tier-value">500</span>
          </div>

          <div className="incentive-tier-row">
            <div className="incentive-tier-left">
              <FaShieldAlt className="incentive-tier-icon gold" />
              <span className="incentive-tier-name">Platinum</span>
            </div>
            <span className="incentive-tier-value">1000</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Incentive;
