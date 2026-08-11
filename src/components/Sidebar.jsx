import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">

        <li className="active">
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>

        <li>
          <Link to="/skills">Skills</Link>
        </li>

        <li>
          <Link to="/search">Search</Link>
        </li>

        <li>
          <Link to="/reviews">Reviews</Link>
        </li>

      </ul>
    </aside>
  );
};

export default Sidebar;