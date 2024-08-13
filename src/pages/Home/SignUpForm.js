import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
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

        const adminCredentials = {
            username: "Herpes",
            email: "herpes@gmail.com",
            password: "parisgames"
        };

        if (formData.username === adminCredentials.username && 
            formData.email === adminCredentials.email && 
            formData.password === adminCredentials.password) {
            navigate('/admin_dashboard');
        } else {
            try {
                const response = await fetch('http://127.0.0.1:5000/users/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.msg || 'Error registering user');
                }

                setAlert({ type: 'success', message: 'User registered successfully!' });
                navigate('/');
                console.log(await response.json());
            } catch (error) {
                setAlert({ type: 'danger', message: error.message });
                console.error(error);
            }
        }
    };

    return (
        <div className="container p-4">
            <div className="container p-4 m-3 bg-dark text-light text-center"><h1>Sign Up</h1></div>
            
            <div className="container p-4 m-3 bg-secondary rounded">
                {alert && (
                    <div className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                        {alert.message}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="formUsername" className="form-label"><b>Username</b></label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            id="formUsername"
                            name="username"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formEmail" className="form-label"><b>Email</b></label>
                        <input
                            type="email"
                            className="form-control form-control-sm"
                            id="formEmail"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formPassword" className="form-label"><b>Password</b></label>
                        <input
                            type="password"
                            className="form-control form-control-sm"
                            id="formPassword"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-dark btn-sm">Sign Up</button>
                    <button className="btn btn-light float-end" onClick={() => navigate(-1)}>Go Back</button>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;
