import React from 'react';

const StatCard = ({ title, value, change, icon }) => {
  return (
    <div className="dash-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>{title}</h3>
        {icon && <span style={{ fontSize: '1.2rem', opacity: 0.8 }}>{icon}</span>}
      </div>
      <p className="card-value">{value}</p>
      {change && <span className="card-change">{change}</span>}
    </div>
  );
};

export default StatCard;