import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './DashboardLayout.css';

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div
    className="dashboard-layout"
    style={{ display: 'flex', minHeight: '85vh', backgroundColor: '#f8fafc' }}
  >
  {/* Left Sidebar - Ye ab har dashboard page par permanent dikhega */}
  <div
  className={`dashboard-sidebar ${
    isSidebarOpen ? 'sidebar-open' : ''
  }`}
      style={{
      width: '250px',
      backgroundColor: '#fff',
      borderRight: '1px solid #e2e8f0',
      padding: '20px',
      flexShrink: 0
    }}
    >
     <button
  className="sidebar-toggle"
  onClick={() => setIsSidebarOpen((prev) => !prev)}
  aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
  aria-expanded={isSidebarOpen}
>
  ☰
</button>
<ul className="sidebar-menu">
  <li>
    <NavLink to="/dashboard" className="sidebar-link">
      Dashboard
    </NavLink>
  </li>

  <li>
    <NavLink to="/profile" className="sidebar-link">
      Profile
    </NavLink>
  </li>

  <li>
    <NavLink to="/skills" className="sidebar-link">
      Skills
    </NavLink>
  </li>

  <li>
    <NavLink to="/search" className="sidebar-link">
      Search
    </NavLink>
  </li>

  <li>
    <NavLink to="/reviews" className="sidebar-link">
      Reviews
    </NavLink>
  </li>

  <li>
    <NavLink to="/requests" className="sidebar-link">
      Requests
    </NavLink>
  </li>

  <li>
    <NavLink to="/upcoming-sessions" className="sidebar-link">
      Upcoming Sessions
    </NavLink>
  </li>
</ul>
      </div>

      {/* Main Content Area - Yahan par Profile, Skills, etc. ke pages badlenge */}
      <div
      className="dashboard-content"
      style={{ flex: 1, padding: '20px', overflowY: 'auto' }}
    >
   <Outlet />
      </div>
    </div>
  );
}