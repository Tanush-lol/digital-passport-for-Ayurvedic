// components/DashboardCards.js
import React from 'react';

const DashboardCards = () => {
  const cards = [
    {
      id: 1,
      title: 'Total Users',
      icon: 'fas fa-users',
      value: '12,584',
      change: { value: 12.5, positive: true },
    },
    {
      id: 2,
      title: 'Revenue',
      icon: 'fas fa-dollar-sign',
      value: '42,389rs',
      change: { value: 8.3, positive: true },
    },
    {
      id: 3,
      title: 'Orders',
      icon: 'fas fa-shopping-cart',
      value: '3,248',
      change: { value: 2.1, positive: false },
    },
    {
      id: 4,
      title: 'Conversion Rate',
      icon: 'fas fa-percentage',
      value: '4.8%',
      change: { value: 0.7, positive: true },
    },
  ];

  return (
    <div className="dashboard-cards">
      {cards.map(card => (
        <div key={card.id} className="card">
          <div className="card-header">
            <h3>{card.title}</h3>
            <i className={card.icon}></i>
          </div>
          <div className="card-value">{card.value}</div>
          <div className={`card-change ${card.change.positive ? 'positive' : 'negative'}`}>
            <i className={`fas fa-arrow-${card.change.positive ? 'up' : 'down'}`}></i>
            {card.change.value}% from last month
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;