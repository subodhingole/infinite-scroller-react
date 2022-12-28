import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "foo" && password === "bar") {
      console.log("Logged in successfully");
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        handleLogin();
        navigate("/home");
      }, 1000);
    } else {
      setTimeout(() => {
        setLoading(false);
        setError("Invalid username or password");
      }, 1000);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Log In (user: foo; pass: bar) </h2>
        {error && <p className="error">{error}</p>}
        <label htmlFor="username">
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
