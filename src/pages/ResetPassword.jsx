import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ResetPassword.css";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
    const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  const handleReset = (event) => {
  event.preventDefault();

  if (!password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const registeredEmail = localStorage.getItem("userEmail");

  if (!registeredEmail || registeredEmail !== email) {
    alert("Email not found. Please register first.");
    return;
  }

  
  localStorage.setItem("userPassword", password);

  alert("Password reset successful!");
  navigate("/login");
};

  return (
    <main className="reset-password">
      <h1>Reset Password</h1>

      <form onSubmit={handleReset}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        <button type="submit">Reset Password</button>
      </form>
    </main>
  );
}

export default ResetPassword;