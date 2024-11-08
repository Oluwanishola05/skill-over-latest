import React, { useState } from "react";
import { Row, Col, Form, FormGroup } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Login.css";
import axios from "axios";
import Swal from 'sweetalert2';
import { CircularProgress } from '@mui/material';
import { useAuth } from "../AuthContext";

const TraineeLogin = () => { 
    const { setIsAuthenticated } = useAuth(); // Access setIsAuthenticated from the context
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            
            // Make your API call here
            const response = await axios.post('https://localhost:7051/api/Auth/TraineeLogin', {
                email,
                password,
            });

            console.log('API Response:', response.data);

            const { responseCode, responseMessage, data } = response.data;
            
            if (responseCode === 200 && data && data.token) {
                // Set sessionStorage items
                sessionStorage.setItem('token', data.token);
                sessionStorage.setItem('email', data.userName);
                sessionStorage.setItem('lastName', data.lastName);
                sessionStorage.setItem('id', data.id);

                // Update authentication status
                setIsAuthenticated(true);

                // Show success alert
                Swal.fire({
                    title: 'Login Successful!',
                    text: responseMessage || 'Welcome back!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });

                // Navigate to a protected route
                navigate('/home');
            } else {
                console.log('Login failed:', responseMessage);
                Swal.fire({
                    title: 'Login Failed',
                    text: responseMessage || 'Invalid credentials. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'Try Again',
                });
            }
        } catch (error) {
            console.error('Login error:', error);
            Swal.fire({
                title: 'Error!',
                text: error.response?.data?.errorMessage || 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <div className="login">
                <form className="auth__form" onSubmit={handleLogin}>
                    <h4 className="log">LOGIN</h4>
                    <FormGroup className="form__groups" id="formGroup">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormGroup>

                    <FormGroup className="form__groups">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>

                    <p className="forgot">
                        <Link to="forgotPassword">Forgot Password</Link>
                    </p>

                    <div>
                        <button type="submit" className="btn__login" disabled={loading}>
                            {loading ? <CircularProgress size={24} thickness={5} style={{ color: '#fff' }} /> : 'LOGIN'}
                        </button>
                    </div>
                    <p>
                        Don't have an account? <Link to="/traineeRegister">Create a trainee account</Link>
                    </p>
                </form>
            </div>
        </Container>
    );
};

export default TraineeLogin;
