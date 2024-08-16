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
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
      <div className="w-100 p-5" style={{ maxWidth: '500px' }}>
        <h2 className="text-center mb-4">Login</h2>

        <div className="bg-secondary p-4 rounded-5">
          {alert && <div className={`alert alert-${alert.type}`} role="alert">{alert.message}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="formEmail" className="form-label"><b>Email</b></label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="formEmail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="formPassword" className="form-label"><b>Password</b></label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="formPassword"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn btn-dark btn-lg w-100 mb-3">
              <b>Login</b>
            </button>
            <button type="button" className="btn btn-warning btn-lg w-100" onClick={() => navigate(-1)}>
              <b>Go Back</b>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
