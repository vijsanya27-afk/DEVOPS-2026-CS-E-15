import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function DashboardLayout() {
  // Active state dynamic styling function
  const linkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? '#4f46e5' : '#333',
    fontWeight: isActive ? 'bold' : 'normal',
    backgroundColor: isActive ? '#eff6ff' : 'transparent',
    padding: '8px 12px',
    borderRadius: '6px',
    display: 'block',
    transition: 'all 0.2s ease'
  });

  return (
    <div style={{ display: 'flex', minHeight: '85vh', backgroundColor: '#f8fafc' }}>
      {/* Left Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#fff', borderRight: '1px solid #e2e8f0', padding: '20px', flexShrink: 0 }}>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><NavLink to="/dashboard" style={linkStyle}>Dashboard</NavLink></li>
          <li><NavLink to="/profile" style={linkStyle}>Profile</NavLink></li>
          <li><NavLink to="/skills" style={linkStyle}>Skills</NavLink></li>
          <li><NavLink to="/search" style={linkStyle}>Search</NavLink></li>
          <li><NavLink to="/reviews" style={linkStyle}>Reviews</NavLink></li>
          <li><NavLink to="/requests" style={linkStyle}>Requests</NavLink></li>
          <li><NavLink to="/upcoming-sessions" style={linkStyle}>Upcoming Sessions</NavLink></li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <Outlet />
      </div>
    </div>
  );
}