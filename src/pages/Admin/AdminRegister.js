import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminRegisterForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
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
            const response = await fetch('https://automated-donation-platform-back-end.onrender.com/admin/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.msg || 'Error registering admin');
            }

            setAlert({ type: 'success', message: 'Admin successfully registered!' });
            setTimeout(() => {
                navigate('/admin_dashboard');
            }, 2000); // 2-second delay

            console.log(await response.json());
        } catch (error) {
            setAlert({ type: 'danger', message: error.message });
            console.error(error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
            <div className="w-100 p-5" style={{ maxWidth: "500px" }}>
                <h2 className="text-center mb-4">Admin Registration</h2>
                
                <div className="bg-secondary p-4 rounded-5">
                    {alert && (
                        <div className={`alert alert-${alert.type}`} role="alert">
                            {alert.message}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="formUsername" className="form-label"><b>Username</b></label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                id="formUsername"
                                name="username"
                                placeholder="Enter your username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="formEmail" className="form-label"><b>Email</b></label>
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                id="formEmail"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
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
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg w-100 mb-3 rounded-pill">
                            Register
                        </button>
                        <button type="button" className="btn btn-warning btn-lg w-100 rounded-pill" onClick={() => navigate(-1)}>
                            Go Back
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminRegisterForm;
