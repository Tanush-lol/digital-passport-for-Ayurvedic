// components/Header.js
import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue);
      setSearchValue('');
    }
  };

  return (
    <header className="header">
      <h2>Dashboard Overview</h2>
      <div className="header-right">
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for anything..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div className="user-info">
          <img src="https://i.pravatar.cc/150?img=12" alt="User Avatar" />
          <span>John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;