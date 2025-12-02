// src/components/Account.jsx
import React from "react";
import "./Account.css";
import { MdOutlineAttachMoney } from "react-icons/md";
import { RiCoupon2Line, RiLockPasswordLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

const Account = ({
  onChangePassword,
  onLogout,
  onOpenIncentive,   // ✅ baru
  onOpenPromo,       // ✅ baru
}) => {
  const user = {
    name: "Afsar Hossen",
    email: "imshuvo97@gmail.com",
  };

  return (
    <div className="account-page">
      {/* PROFILE */}
      <section className="account-profile">
        <div className="profile-avatar">
          <span className="profile-initial">
            {user.name?.charAt(0) || "U"}
          </span>
        </div>
        <div className="profile-info">
          <div className="profile-name">{user.name}</div>
          <div className="profile-email">{user.email}</div>
        </div>
      </section>

      {/* LIST MENU */}
      <section className="account-list">
        {/* INSENTIF */}
        <button
          type="button"
          className="account-item"
          onClick={onOpenIncentive}      // ✅ klik → buka halaman insentif
        >
          <div className="item-left">
            <MdOutlineAttachMoney className="item-icon" />
            <span>Insentif</span>
          </div>
          <span className="item-arrow">›</span>
        </button>

        {/* PROMO CARD → COUPON */}
        <button
          type="button"
          className="account-item"
          onClick={onOpenPromo}          // ✅ klik → buka halaman kupon
        >
          <div className="item-left">
            <RiCoupon2Line className="item-icon" />
            <span>Promo Card</span>
          </div>
          <span className="item-arrow">›</span>
        </button>

        <button
          type="button"
          className="account-item"
          onClick={onChangePassword}
        >
          <div className="item-left">
            <RiLockPasswordLine className="item-icon" />
            <span>Ganti Password</span>
          </div>
          <span className="item-arrow">›</span>
        </button>
      </section>

      {/* LOGOUT BUTTON */}
      <div className="account-logout-wrapper">
        <button
          type="button"
          className="logout-btn"
          onClick={onLogout}
        >
          <FiLogOut className="logout-icon" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Account;
