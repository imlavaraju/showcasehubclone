// Login.js
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const users = [
    { username: "lavaraju", password: "nani" },
    { username: "user2", password: "password2" },
    // Add more users as needed
  ];

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/projects");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Login</h2>
      <div className="row justify-content-center">
        <div className="col-md-4">
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="use:lavaraju"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="use:nani"
            />
          </div>
          <button className="btn btn-primary mt-3" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
