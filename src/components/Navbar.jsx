import { useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/skill-exchange-logo.png";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dashboardPaths = [
    "/dashboard",
    "/profile",
    "/skills",
    "/search",
    "/reviews",
    "/requests",
    "/session-scheduling",
    "/upcoming-sessions",
  ];

  const showDashboardNotifications =
    dashboardPaths.includes(location.pathname);

  const [notifications, setNotifications] = useState([
    { id: 1, text: "Priya sent you a request.", time: "5m ago", route: "/requests", unread: true },
    { id: 2, text: "Rahul accepted your exchange.", time: "20m ago", route: "/exchange/status", unread: true }
  ]);

  return (
    <nav className="navbar">
  <img
    src={logo}
    alt="Skill Exchange"
    className="navbar-logo"
    onClick={() => navigate("/")}
  />
  <div
  className={`navbar-links ${
    showDashboardNotifications ? "with-notification-space" : ""
  }`}
  >
  <NavLink to="/">Home</NavLink>

{![
  "/",
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/explore-skills",
].includes(location.pathname) && (
  <NavLink to="/exchange">Exchange</NavLink>
)}

{[
  "/",
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/explore-skills",
].includes(location.pathname) && (
  <>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/register">Register</NavLink>
  </>
)}
    </div>
  {showDashboardNotifications && (
<div className="notification-wrapper">
  <button
    className="notification-button"
    onClick={() => setShowNotifications(!showNotifications)}
    aria-label="Notifications"
  >
    🔔
    {notifications.some((notification) => notification.unread) && (
      <span className="notification-badge">
        {notifications.filter((notification) => notification.unread).length}
      </span>
    )}
  </button>

  {showNotifications && (
    <div className="notification-dropdown">
      <div className="notification-header">
        <h3>Notifications</h3>
      </div>

      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <button
            key={notification.id}
            className={`notification-item ${
              notification.unread ? "unread" : ""
            }`}
            onClick={() => {
              setNotifications((prev) =>
                prev.map((item) =>
                  item.id === notification.id
                    ? { ...item, unread: false }
                    : item
                )
              );
              setShowNotifications(false);
              navigate(notification.route);
            }}
          >
            <p>{notification.text}</p>
            <small>{notification.time}</small>
          </button>
        ))
      ) : (
        <div className="notification-item">
          <p>No new notifications.</p>
        </div>
      )}
    </div>
  )}
</div>
)}
    </nav>
  );
}

export default Navbar;