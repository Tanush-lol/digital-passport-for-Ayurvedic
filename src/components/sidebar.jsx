// components/Sidebar.js
import React from 'react';

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const menuItems = [
    { id: 'dashboard', icon: 'fas fa-home', label: 'Dashboard' },
    { id: 'analytics', icon: 'fas fa-chart-bar', label: 'Analytics' },
    { id: 'users', icon: 'fas fa-users', label: 'Users' },
    { id: 'orders', icon: 'fas fa-shopping-cart', label: 'Orders' },
    { id: 'settings', icon: 'fas fa-cog', label: 'Settings' },
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <i className="fas fa-rocket"></i>
        <h1>AppDashboard</h1>
      </div>
      <ul className="menu">
        {menuItems.map(item => (
          <li key={item.id} className="menu-item">
            <button
              className={`menu-link ${activeMenu === item.id ? 'active' : ''}`}
              onClick={() => setActiveMenu(item.id)}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;