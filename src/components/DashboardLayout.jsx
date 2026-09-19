import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '85vh', backgroundColor: '#f8fafc' }}>
      {/* Left Sidebar - Ye ab har dashboard page par permanent dikhega */}
      <div style={{ width: '250px', backgroundColor: '#fff', borderRight: '1px solid #e2e8f0', padding: '20px', flexShrink: 0 }}>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <li><Link to="/dashboard" style={{ textDecoration: 'none', color: '#4f46e5', fontWeight: 'bold' }}>Dashboard</Link></li>
          <li><Link to="/profile" style={{ textDecoration: 'none', color: '#333' }}>Profile</Link></li>
          <li><Link to="/skills" style={{ textDecoration: 'none', color: '#333' }}>Skills</Link></li>
          <li><Link to="/search" style={{ textDecoration: 'none', color: '#333' }}>Search</Link></li>
          <li><Link to="/reviews" style={{ textDecoration: 'none', color: '#333' }}>Reviews</Link></li>
          <li><Link to="/requests" style={{ textDecoration: 'none', color: '#333' }}>Requests</Link></li>
          <li><Link to="/upcoming-sessions" style={{ textDecoration: 'none', color: '#333' }}>Upcoming Sessions</Link></li>
        </ul>
      </div>

      {/* Main Content Area - Yahan par Profile, Skills, etc. ke pages badlenge */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <Outlet />
      </div>
    </div>
  );
}