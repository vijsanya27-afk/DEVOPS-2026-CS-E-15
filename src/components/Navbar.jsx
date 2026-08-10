import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Skill Exchange</h2>

      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>
  );
}

export default Navbar;