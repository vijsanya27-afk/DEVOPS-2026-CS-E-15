import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  // Active Link Helper Function
  const isActive = (path) => location.pathname === path;

  const getItemStyle = (path) => ({
    display: "block",
    padding: "10px 16px",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: isActive(path) ? "700" : "500",
    color: isActive(path) ? "#4f46e5" : "#64748b",
    backgroundColor: isActive(path) ? "#eff6ff" : "transparent",
    transition: "all 0.2s ease",
  });

  return (
    <aside style={{ width: "220px", padding: "20px 12px", minHeight: "100vh", borderRight: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
        <li>
          <Link to="/dashboard" style={getItemStyle("/dashboard")}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/profile" style={getItemStyle("/profile")}>
            Profile
          </Link>
        </li>
        <li>
          <Link to="/skills" style={getItemStyle("/skills")}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="/search" style={getItemStyle("/search")}>
            Search
          </Link>
        </li>
        <li>
          <Link to="/reviews" style={getItemStyle("/reviews")}>
            Reviews
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;