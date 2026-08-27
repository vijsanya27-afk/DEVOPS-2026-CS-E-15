import { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const [notifications,setNotifications] = useState([
    {
      id: 1,
      text: "Priya sent you a skill exchange request.",
      time: "5 min ago",
      route: "/requests",
      unread: true,
    },
    {
      id: 2,
      text: "Rahul rejected your React exchange request.",
      time: "20 min ago",
      route: "/exchange/status",
      unread: true,
    },
    {
      id: 3,
      text: "Your upcoming Python exchange is scheduled.",
      time: "1 hour ago",
      route: "/exchange/history",
      unread: false,
    },
  ]);

  const handleNotificationClick = (notification) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === notification.id
          ? { ...item, unread: false }
          : item
      )
    );
  
    setShowNotifications(false);
    navigate(notification.route);
  };
  return (
    <nav className="navbar">
      <h2>Skill Exchange</h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        <div className="notification-wrapper">
          <button
            type="button"
            className="notification-button"
            onClick={() => setShowNotifications((prev) => !prev)}
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

              {notifications.map((notification) => (
                <button
                  type="button"
                  className={`notification-item ${
                    notification.unread ? "unread" : ""
                  }`}
                  key={notification.id}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <p>{notification.text}</p>
                  <small>{notification.time}</small>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;