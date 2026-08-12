import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import StatCard from '../components/StatCard.jsx';
import './Dashboard.css';

const Dashboard = () => {
  const statsData = [
    { id: 1, title: 'My Skills', value: '5 Active', change: '+2 this week', icon: '⚡' },
    { id: 2, title: 'Skill Requests', value: '3 Pending', change: '1 new today', icon: '📩' },
    { id: 3, title: 'Matches', value: '12 Found', change: '+4 this month', icon: '🎯' },
    { id: 4, title: 'Rating', value: '4.8 ⭐', change: 'Based on 25 reviews', icon: '🏆' },
  ];

  // Khali space bharne ke liye Recent Requests ka dummy data
  const recentRequests = [
    { id: 1, name: 'Rahul Sharma', skill: 'React.js', lookingFor: 'Python', status: 'Pending' },
    { id: 2, name: 'Priya Verma', skill: 'UI/UX Design', lookingFor: 'Node.js', status: 'Accepted' },
    { id: 3, name: 'Aman Gupta', skill: 'Data Structures', lookingFor: 'Java', status: 'Pending' },
  ];

  return (
    <div className="dashboard-page">
      <Sidebar />

      <main className="dashboard-main">
        {/* Header - Left Aligned */}
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Find people, share skills and learn together.</p>
        </header>

        {/* 1. Top Stat Cards */}
        <div className="cards-grid">
          {statsData.map((stat) => (
            <StatCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* 2. Middle Section - Recent Requests & Quick Actions */}
        <div className="dashboard-content-grid">
          {/* Table / Recent Activity Section */}
          <div className="dash-section">
            <div className="section-header">
              <h3>Recent Skill Requests</h3>
              <button className="btn-view-all">View All</button>
            </div>
            
            <table className="requests-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Offers</th>
                  <th>Wants</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentRequests.map((req) => (
                  <tr key={req.id}>
                    <td><strong>{req.name}</strong></td>
                    <td><span className="skill-tag">{req.skill}</span></td>
                    <td><span className="skill-tag alt">{req.lookingFor}</span></td>
                    <td>
                      <span className={`status-badge ${req.status.toLowerCase()}`}>
                        {req.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Actions Side Card */}
          <div className="dash-section quick-actions">
            <h3>Quick Actions</h3>
            <p>What would you like to do today?</p>
            <div className="action-buttons">
              <button className="btn-primary">+ Add New Skill</button>
              <button className="btn-secondary">🔍 Find Matches</button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;