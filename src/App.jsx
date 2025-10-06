// App.js
import React, { useState } from 'react';
import './App.css';

// Components
import Sidebar from './components/sidebar';
import Header from './components/header';
import DashboardCards from './components/DashboardCards';
import Charts from './components/Charts';
import RecentActivity from './components/RecentActivity';

function App() {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    alert(`Searching for: ${query}`);
  };
  
  return (
    <div className="app">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="main-content">
        <Header onSearch={handleSearch} />
        <div className="content-area">
          {activeMenu === 'dashboard' && (
            <>
              <DashboardCards />
              <Charts />
              <RecentActivity />
            </>
          )}
          {activeMenu === 'analytics' && (
            <div className="page-placeholder">
              <h2>Analytics Page</h2>
              <p>Analytics content will be displayed here.</p>
            </div>
          )}
          {activeMenu === 'users' && (
            <div className="page-placeholder">
              <h2>Users Management</h2>
              <p>User management interface will be displayed here.</p>
            </div>
          )}
          {activeMenu === 'orders' && (
            <div className="page-placeholder">
              <h2>Orders</h2>
              <p>Order management interface will be displayed here.</p>
            </div>
          )}
          {activeMenu === 'settings' && (
            <div className="page-placeholder">
              <h2>Settings</h2>
              <p>Application settings will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </div>  
  );
}

export default App;
