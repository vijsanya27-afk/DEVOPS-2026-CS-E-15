import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
  event.preventDefault();

  if (email.trim() === "") {
    alert("Please enter your email");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email");
    return;
  }

  if (password === "") {
    alert("Please enter your password");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

       const savedEmail = localStorage.getItem("userEmail");
      const savedPassword = localStorage.getItem("userPassword");

        if (email === savedEmail && password === savedPassword) {
          alert("Login successful!");
          navigate("/dashboard");
            } else {
            alert("Invalid email or password!");
        }
     };

  return (
    <div className="login">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Login</button>

        <button
       type="button"
         className="forgot-link"
      onClick={() => navigate("/forgot-password")}
      >
         Forgot Password?
          </button>
      </form>
    </div>
  );
}

export default Login;