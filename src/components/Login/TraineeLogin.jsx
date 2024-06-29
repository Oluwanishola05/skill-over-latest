import React, {useState} from "react";
import {Row, Col, Form, FormGroup } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Login.css";
import axios from "axios";
import Swal from 'sweetalert2';
import { CircularProgress } from '@mui/material';
import { Navigate } from "react-router-dom";


const TraineeLogin = () => { 

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            setLoading(true);

          // Make your API call here
          const response = await fetch('https://2yrybhjzj4.execute-api.eu-west-2.amazonaws.com/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });
    
          if (response.ok) {
            // If login is successful, show SweetAlert2 success message
            Swal.fire({
              icon: 'success',
              title: 'Login Successful',
              text: 'Welcome back!',
            });
    
            navigate('/home');

          } else {
            // If login fails, show SweetAlert2 error message
            Swal.fire({
              icon: 'error',
              title: 'Login Failed',
              text: 'Invalid username or password',
            });

            
          }
        } catch (error) {
          console.error('Error during login:', error);
          // Handle other error cases if necessary
        } finally {
            setLoading(false);
          }
      };
   

    return(
        <>
        <Container>
           
            <div className="login">

            <form className="auth__form" >

                <h4 className="log">LOGIN</h4>
                <FormGroup className="form__groups" id="formGroup">
                  <input type="email" placeholder="Enter your email" value={email} onChange={e=> setEmail(e.target.value)}/>
                </FormGroup>
    
                <FormGroup className="form__groups">
                    <input type="password" placeholder="Enter your password" value={password} onChange={e=> setPassword(e.target.value)}/>
                </FormGroup>

                <p className="forgot"><a href='forgotPassword'>Forgot Password</a></p>
    
                <div>
                    <button type="submit" className="btn__login" onClick={handleLogin} disabled={loading}>
                         {loading ? <CircularProgress size={24} thickness={5} style={{ color: '#fff' }}/> : 'LOGIN'}
                    </button>
                </div>
                    <p>Don't have an account? <Link to='/traineeRegister'>Create a trainee account</Link></p>
                               
            </form>
            </div>           
            
               
        </Container>
        </>
    )
}

export default TraineeLogin;