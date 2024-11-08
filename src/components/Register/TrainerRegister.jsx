import React, {useState} from 'react';
import { Form, Button, Container, FormGroup, Row, Col } from 'react-bootstrap';
import './traineeRegister.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';


const TrainerRegister = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [location, setLocation] = useState("")
    const [gender, setGender] = useState("")
    const [dateofBirth, setDateOfBirth] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [nin, setNIN] = useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true);

          // Make your API call here
          const response = await axios.post('https://localhost:7051/api/TrainerUser/SignUpTrainer', {
              email,
              password, 
              firstname, 
              lastname, 
              location, 
              gender, 
              dateofBirth, 
              phoneNumber, 
              nin
          });

          //console.log('API Response:', response.data);

          const { responseCode, responseMessage, data } = response.data;
         
    
          if (responseCode === 200) {
            // If login is successful, show SweetAlert2 success message
            Swal.fire({
              icon: 'success',
              title: 'Successfully Registered',
              text: responseMessage || 'Please Login!',
            });


            navigate('/loginTrainer');
    
            //console.log(email, password);

          } else {
            // If login fails, show SweetAlert2 error message
            Swal.fire({
              icon: 'error',
              title: 'Registration Failed',
              text: responseMessage || 'Invalid Details',
            });

            
          }
        } catch (error) {
          console.error('Error during registration:', error);
          // Handle other error cases if necessary
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: error || 'Invalid Details',
          });
        } finally {
            setLoading(false);
          }
      };

    return(
        <>
            <Container className='Container'>
               
                    <div className="register">

                        <Form className="authForm" >

                            <h4 className="log">SIGN UP TRAINER</h4>
                            <Row className='Train'>
                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" id="formGroup">
                                        <input type="text" placeholder="Enter your firstname" value={firstname} onChange={e=> setFirstName(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" id="formGroup">
                                        <input type="text" placeholder="Enter your lastname" value={lastname} onChange={e=> setLastName(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" id="formGroup">
                                        <input type="email" placeholder="Enter your email" value={email} onChange={e=> setEmail(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms">
                                        <input type="password" placeholder="Enter your password" value={password} onChange={e=> setPassword(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms">
                                        <input type="text" placeholder="Enter your location" value={location} onChange={e=> setLocation(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" >
                                            <Form.Select  size='md' value={gender} onChange={e=> setGender(e.target.value)} className='input'>
                                                <option>Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">other</option>
                                            </Form.Select> 
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" id="formGroup">
                                        <input type="date" placeholder="Date Of Birth" value={dateofBirth} onChange={e=> setDateOfBirth(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" id="formGroup">
                                        <input type="tel" placeholder="Telephone" value={phoneNumber} onChange={e=> setPhoneNumber(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <FormGroup className="forms" id="formGroup">
                                <input type="text" placeholder="NIN" value={nin} onChange={e=> setNIN(e.target.value)}/>
                                </FormGroup>

                                <div>
                                <button type="submit" className="btn__login"  onClick={handleSubmit}>
                                    {loading ? <CircularProgress size={24} thickness={5} style={{ color: '#fff' }}/> : 'REGISTER'}
                                    </button>
                                </div>

                                <p>Already have an account? 
                                    <a href='loginTrainee'> Login</a>
                                </p>
                            </Row>      
                                        
                        </Form>
                        </div>          
                    
               
            </Container>
        </>
    )
}

export default TrainerRegister;