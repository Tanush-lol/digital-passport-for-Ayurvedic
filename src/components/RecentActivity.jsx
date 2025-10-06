// components/RecentActivity.js
import React from 'react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'user',
      icon: 'fas fa-user-plus',
      title: 'New user registered',
      description: 'John Smith joined the platform',
      time: '10 minutes ago',
    },
    {
      id: 2,
      type: 'payment',
      icon: 'fas fa-credit-card',
      title: 'Payment received',
      description: 'Order #2849 was completed',
      time: '2 hours ago',
    },
    {
      id: 3,
      type: 'system',
      icon: 'fas fa-exclamation-triangle',
      title: 'System update',
      description: 'Scheduled maintenance completed',
      time: '5 hours ago',
    },
    {
      id: 4,
      type: 'user',
      icon: 'fas fa-user-check',
      title: 'Profile updated',
      description: 'Sarah Johnson updated her profile',
      time: 'Yesterday',
    },
  ];

  const getIconClass = (type) => {
    switch (type) {
      case 'user': return 'activity-icon user';
      case 'payment': return 'activity-icon payment';
      case 'system': return 'activity-icon system';
      default: return 'activity-icon';
    }
  };

  return (
    <div className="recent-activity">
      <div className="activity-header">
        <h3>Recent Activity</h3>
        <button className="view-all-btn">View All</button>
      </div>
      <ul className="activity-list">
        {activities.map(activity => (
          <li key={activity.id} className="activity-item">
            <div className={getIconClass(activity.type)}>
              <i className={activity.icon}></i>
            </div>
            <div className="activity-content">
              <div className="activity-title">{activity.title}</div>
              <div className="activity-desc">{activity.description}</div>
              <div className="activity-time">{activity.time}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;