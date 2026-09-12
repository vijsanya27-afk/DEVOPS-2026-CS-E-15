import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleForgotPassword = (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const enteredEmail = email.trim();
    const registeredEmail = localStorage.getItem("userEmail");

    if (!enteredEmail) {
      setError("Please enter your email.");
      return;
    }

    if (!enteredEmail.includes("@") || !enteredEmail.includes(".")) {
      setError("Please enter a valid email.");
      return;
    }

    if (!registeredEmail || registeredEmail !== enteredEmail) {
      setError("Email not found. Please register first.");
      return;
    }

    setSuccess("Email verified. Redirecting to password reset...");

    setTimeout(() => {
      navigate("/reset-password", {
        state: { email: enteredEmail }
      });
    }, 800);
  };

  return (
    <main className="forgot-password">
      <h1>Forgot Password?</h1>

      <div className="forgot-card">
        <p>Enter your registered email to reset your password.</p>

        <form onSubmit={handleForgotPassword}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError("");
              setSuccess("");
            }}
          />

          {error && <p className="form-error">{error}</p>}
          {success && <p className="form-success">{success}</p>}

          <button type="submit">Continue</button>
        </form>

        <button
          type="button"
          className="back-login"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>
      </div>
    </main>
  );
}

export default ForgotPassword;