import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">

        <li>
          <NavLink to="/dashboard">
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile">
            Profile
          </NavLink>
        </li>

        <li>
          <NavLink to="/skills">
            Skills
          </NavLink>
        </li>

        <li>
          <NavLink to="/search">
            Search
          </NavLink>
        </li>

        <li>
          <NavLink to="/reviews">
            Reviews
          </NavLink>
        </li>

      </ul>
    </aside>
  );
};

export default Sidebar;