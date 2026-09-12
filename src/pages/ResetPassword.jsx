import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ResetPassword.css";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  const handleReset = (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!email) {
      setError("Reset session expired. Please request a new reset.");
      return;
    }

    if (!password || !confirmPassword) {
      setError("Please fill all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const registeredEmail = localStorage.getItem("userEmail");

    if (!registeredEmail || registeredEmail !== email) {
      setError("Email not found. Please register first.");
      return;
    }

    localStorage.setItem("userPassword", password);

    setSuccess("Password reset successful. Redirecting to login...");

    setTimeout(() => {
      navigate("/login");
    }, 800);
  };

  return (
    <main className="reset-password">
      <h1>Reset Password</h1>

      <form onSubmit={handleReset}>
        <p className="reset-info">
          Create a new password for your account.
        </p>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setError("");
          }}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
            setError("");
          }}
        />

        {error && <p className="form-error">{error}</p>}
        {success && <p className="form-success">{success}</p>}

        <button type="submit">Reset Password</button>

        <button
          type="button"
          className="back-login"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>
      </form>
    </main>
  );
}

export default ResetPassword;