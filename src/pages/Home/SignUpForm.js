// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Alert } from 'react-bootstrap';

// const SignUpForm = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: ''
//     });
//     const [alert, setAlert] = useState(null);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post(' http://127.0.0.1:5000/users/register', formData);
//             setAlert({ type: 'success', message: 'User registered successfully!' });
//             console.log(response.data);
//         } catch (error) {
//             setAlert({ type: 'danger', message: error.response.data.msg || 'Error registering user' });
//             console.error(error);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Sign Up</h2>
//             {alert && <Alert variant={alert.type}>{alert.message}</Alert>}
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group controlId="formUsername">
//                     <Form.Label>Username</Form.Label>
//                     <Form.Control 
//                         type="text" 
//                         name="username" 
//                         value={formData.username} 
//                         onChange={handleChange} 
//                         placeholder="Enter your username" 
//                         required 
//                     />
//                 </Form.Group>

//                 <Form.Group controlId="formEmail" className="mt-3">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control 
//                         type="email" 
//                         name="email" 
//                         value={formData.email} 
//                         onChange={handleChange} 
//                         placeholder="Enter your email" 
//                         required 
//                     />
//                 </Form.Group>

//                 <Form.Group controlId="formPassword" className="mt-3">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control 
//                         type="password" 
//                         name="password" 
//                         value={formData.password} 
//                         onChange={handleChange} 
//                         placeholder="Enter your password" 
//                         required 
//                     />
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="mt-4">
//                     Sign Up
//                 </Button>
//             </Form>
//         </div>
//     );
// };

// export default SignUpForm;





// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';


// const SignUpForm = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: ''
//     });
//     const [alert, setAlert] = useState(null);
//     const navigate = useNavigate();


//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Check for specific admin credentials
//         const adminUsername = "Herpes";
//         const adminEmail = "herpes@gmail.com";
//         const adminPassword = "Paris"
 
//         if (formData.username === adminUsername && formData.email === adminEmail) {
//             // Redirect to admin page
//             navigate('/admin-dashboard');

//         } else {
//             try {
//                 const response = await axios.post('http://127.0.0.1:5000/users/register', formData);
//                 setAlert({ type: 'success', message: 'User registered successfully!' });
//                 console.log(response.data);
//             } catch (error) {
//                 setAlert({ type: 'danger', message: error.response.data.msg || 'Error registering user' });
//                 console.error(error);
//             }
//         }
//     };
    
//     return (
//         <div className="container mt-5">
//             <h2>Sign Up</h2>
//             {alert && <Alert variant={alert.type}>{alert.message}</Alert>}
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group controlId="formUsername">
//                     <Form.Label>Username</Form.Label>
//                     <Form.Control 
//                         type="text" 
//                         name="username" 
//                         value={formData.username} 
//                         onChange={handleChange} 
//                         placeholder="Enter your username" 
//                         required 
//                     />
//                 </Form.Group>

//                 <Form.Group controlId="formEmail" className="mt-3">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control 
//                         type="email" 
//                         name="email" 
//                         value={formData.email} 
//                         onChange={handleChange} 
//                         placeholder="Enter your email" 
//                         required 
//                     />
//                 </Form.Group>

//                 <Form.Group controlId="formPassword" className="mt-3">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control 
//                         type="password" 
//                         name="password" 
//                         value={formData.password} 
//                         onChange={handleChange} 
//                         placeholder="Enter your password" 
//                         required 
//                     />
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="mt-4">
//                     Sign Up
//                 </Button>
//             </Form>
//         </div>
//     );
// };

// export default SignUpForm;



import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Define the handleChange function
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for specific admin credentials
        const adminUsername = "Herpes";
        const adminEmail = "herpes@gmail.com";
        const adminPassword = "parisgames";

        if (formData.username === adminUsername && formData.email === adminEmail && formData.password === adminPassword) {
            // Redirect to admin page
            navigate('/admin_dashboard');
        } else {
            try {
                const response = await axios.post('http://127.0.0.1:5000/users/register', formData);
                setAlert({ type: 'success', message: 'User registered successfully!' });
                navigate('/')
                console.log(response.data);
            } catch (error) {
                // Check if error.response exists before accessing error.response.data
                const errorMessage = error.response && error.response.data && error.response.data.msg
                    ? error.response.data.msg
                    : 'Error registering user';
                setAlert({ type: 'danger', message: errorMessage });
                console.error(error);
            }
        }
    };

    return (
        <div className="container mt-5">
            <h2>Sign Up</h2>
            {alert && <Alert variant={alert.type}>{alert.message}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange}  // Here, handleChange is called correctly
                        placeholder="Enter your username" 
                        required 
                    />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}  // Here, handleChange is called correctly
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
                        onChange={handleChange}  // Here, handleChange is called correctly
                        placeholder="Enter your password" 
                        required 
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-4">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default SignUpForm;
