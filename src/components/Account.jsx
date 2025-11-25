// Account.jsx
import React from 'react';
import { FaArrowLeft, FaGift, FaTag, FaLock, FaSignOutAlt, FaChevronRight } from 'react-icons/fa';
import { MdOutlineHome, MdHistory, MdOutlinePerson } from 'react-icons/md';

const Account = ({ onBack }) => {
  const user = {
    name: "Afscr Hossen",
    email: "imshuvc97@gmail.com",
    avatar: "/api/placeholder/80/80"
  };

  const menuItems = [
    {
      id: 1,
      icon: <FaGift />,
      title: "Insentif",
      description: "Lihat insentif dan reward Anda",
      action: () => console.log('Insentif clicked')
    },
    {
      id: 2,
      icon: <FaTag />,
      title: "Promo Cord",
      description: "Kode promo dan voucher",
      action: () => console.log('Promo Cord clicked')
    },
    {
      id: 3,
      icon: <FaLock />,
      title: "Ganti Password",
      description: "Ubah kata sandi akun Anda",
      action: () => console.log('Ganti Password clicked')
    },
    {
      id: 4,
      icon: <FaSignOutAlt />,
      title: "Log Out",
      description: "Keluar dari akun",
      action: () => console.log('Log Out clicked'),
      isLogout: true
    }
  ];

  return (
    <div className="account-container">
      {/* Header dengan waktu */}
      <header className="account-header">
        <div className="header-top">
          <button className="back-btn" onClick={onBack}>
            <FaArrowLeft />
          </button>
          <div className="time">9:41</div>
          <div className="header-placeholder"></div>
        </div>
        <h1 className="account-title">Account</h1>
      </header>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-card">
          <div className="avatar-container">
            <img src={user.avatar} alt={user.name} className="avatar" />
          </div>
          <div className="profile-info">
            <h2 className="user-name">{user.name}</h2>
            <p className="user-email">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="menu-section">
        {menuItems.map((item) => (
          <div 
            key={item.id} 
            className={`menu-item ${item.isLogout ? 'logout' : ''}`}
            onClick={item.action}
          >
            <div className="menu-item-left">
              <div className="menu-icon">
                {item.icon}
              </div>
              <div className="menu-content">
                <h3 className="menu-title">{item.title}</h3>
                <p className="menu-description">{item.description}</p>
              </div>
            </div>
            {!item.isLogout && (
              <div className="menu-arrow">
                <FaChevronRight />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button className="nav-item">
          <MdOutlineHome className="nav-icon" />
          <span className="nav-label">Home</span>
        </button>
        <button className="nav-item">
          <MdHistory className="nav-icon" />
          <span className="nav-label">History</span>
        </button>
        <button className="nav-item active">
          <MdOutlinePerson className="nav-icon" />
          <span className="nav-label">Akun</span>
        </button>
      </nav>
    </div>
  );
};

export default Account;