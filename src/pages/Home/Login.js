import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://automated-donation-platform-back-end.onrender.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();

      if (response.ok) {
        setAlert({ type: 'success', message: data.message || 'Login successful!' });
        navigate('/home'); 
      } else if (response.status === 401) {
        setAlert({ type: 'danger', message: data.msg || 'Invalid email or password!' });
      } else {
        setAlert({ type: 'danger', message: `Server Error: ${data.msg || 'An error occurred'}` });
      }
    } catch (error) {
      const errorMessage = error.message || 'Error logging in';
      setAlert({ type: 'danger', message: errorMessage });
      console.error(error);
    }
  };

  return (
    <div className="container p-4">
      <div className="container p-4 m-3 bg-dark text-light text-center">
        <h2>Login</h2>
      </div>

      <div className="container p-4 m-3 bg-secondary rounded">
        {alert && <div className={`alert alert-${alert.type}`} role="alert">{alert.message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="formEmail" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="formEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="formPassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="formPassword"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-dark btn-sm">
            Login
          </button>
          <button className="btn btn-light float-end btn-sm" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
