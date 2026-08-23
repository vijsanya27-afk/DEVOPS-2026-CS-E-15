import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email");
      return;
    }

    alert("Password reset link sent to your email!");

    navigate("/reset-password", {
      state: { email: email }
    });
  };

  return (
    <div className="forgot-password">
      <h1>Forgot Password?</h1>

      <div className="forgot-card">
        <p>Enter your email to reset your password.</p>

        <form onSubmit={handleForgotPassword}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <button type="submit">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;