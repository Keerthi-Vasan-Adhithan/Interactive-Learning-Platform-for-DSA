import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add actual login logic (e.g., API call) here
    login(); // Set isLoggedIn to true
    navigate("/problems", { state: { message: "Logged in successfully", messageType: "message-success" } });
  };

  return (
    <div className="login-section">
      <h2 className="login-title">Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;