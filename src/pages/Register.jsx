import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    if (name === "" || email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    alert("Registration successful!");

    navigate("/login");
  };

  return (
    <div className="register">
      <h1>Create Account</h1>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;