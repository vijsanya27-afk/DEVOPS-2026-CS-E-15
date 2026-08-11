import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      {/* 10 Aug Task: Layout Setup with Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Find people, share skills and learn together.</p>
        </header>

        {/* 11 Aug Task: Basic Cards Layout */}
        <div className="cards-grid">
          <div className="dash-card">
            <h3>My Skills</h3>
            <p className="card-value">5 Active</p>
          </div>
          <div className="dash-card">
            <h3>Skill Requests</h3>
            <p className="card-value">3 Pending</p>
          </div>
          <div className="dash-card">
            <h3>Matches</h3>
            <p className="card-value">12 Found</p>
          </div>
          <div className="dash-card">
            <h3>Rating</h3>
            <p className="card-value">4.8 ⭐</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;