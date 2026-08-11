import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li className="active">Dashboard</li>
        <li>Profile</li>
        <li>Skills</li>
        <li>Search</li>
        <li>Reviews</li>
      </ul>
    </aside>
  );
};

export default Sidebar;