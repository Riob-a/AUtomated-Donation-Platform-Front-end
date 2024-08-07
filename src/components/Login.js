// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Login.css'; // Ensure the path is correct based on your project structure

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    login();
    navigate('/donor');
  };

  return (
    <>
      <nav className="navbar">
        {/* Navbar content */}
      </nav>
      <div className="background-container">
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Sign In</button>
            <a href="/forgot-password">Forgot password?</a>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
