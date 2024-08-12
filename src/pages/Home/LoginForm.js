import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Replace with your actual backend API URL
            const response = await axios.post('http://127.0.0.1:5000/users/logIn', formData);
            
            if (response.data.success) {
                setAlert({ type: 'success', message: 'Login successful!' });
                
                // Redirect user based on role or any other logic
                if (response.data.isAdmin) {
                    navigate('/admin_dashboard');
                } else {
                    navigate('/');
                }
            } else {
                setAlert({ type: 'danger', message: 'Invalid credentials!' });
            }
         } catch (error) {
            const errorMessage = error.response && error.response.data && error.response.data.msg
                ? error.response.data.msg
                : 'Error logging in';
            setAlert({ type: 'danger', message: errorMessage });
            console.error(error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            {alert && <Alert variant={alert.type}>{alert.message}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Enter your email" 
                        required 
                    />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        placeholder="Enter your password" 
                        required 
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-4">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default LoginForm;
