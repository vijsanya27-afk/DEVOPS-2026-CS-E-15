import { useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [notifications, setNotifications] = useState([
    { id: 1, text: "Priya sent you a request.", time: "5m ago", route: "/requests", unread: true },
    { id: 2, text: "Rahul accepted your exchange.", time: "20m ago", route: "/exchange/status", unread: true }
  ]);

  return (
    <nav className="navbar">
      <h2
  onClick={() => navigate("/")}
  style={{ cursor: "pointer", color: "#4f46e5" }}
>
  Skill Exchange
</h2>
      <div className="navbar-links">
  <NavLink to="/">Home</NavLink>

  {location.pathname !== "/" && (
    <>
      <NavLink to="/exchange">Exchange</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
        </>
       )}
      </div>
    </nav>
  );
}

export default Navbar;