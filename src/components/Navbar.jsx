import { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([
    { id: 1, text: "Priya sent you a request.", time: "5m ago", route: "/requests", unread: true },
    { id: 2, text: "Rahul accepted your exchange.", time: "20m ago", route: "/exchange/status", unread: true }
  ]);

  return (
    <nav className="navbar">
      <h2 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Skill Exchange</h2>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/exchange">Exchange</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;