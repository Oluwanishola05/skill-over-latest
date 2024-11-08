import React, { useState, useEffect } from 'react';
import { Form, Button, Container, FormGroup, Row, Col } from 'react-bootstrap';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import hire from '../../assets/image/hireeeeee.jpg';
import '../Hire/Hire.css';

const HireJob = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        const employerID = sessionStorage.getItem('id'); // Replace 'userId' with your key
        if (employerID) {
            setEmployerID(employerID); // Update state with retrieved ID
        }
    }, []);

    // Form state variables
    const [Firstname, setFirstName] = useState("");
    const [Lastname, setLastName] = useState("");
    const [EmployerID, setEmployerID] = useState(null);
    const [Sex, setSex] = useState("");
    const [MobileContact, setMobileContact] = useState("");
    const [Email, setEmail] = useState("");
    const [Position, setPosition] = useState("");
    const [BusinessName, setBusinessName] = useState("");
    const [ServiceLocation, setServiceLocation] = useState("");
    const [LengthOfService, setLengthOfService] = useState("");
    const [AdditionalMessage, setAdditionalMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            
            const response = await axios.post('https://localhost:7051/api/Post/Hiring', {
                Firstname, 
                Lastname,
                EmployerID,
                Position,
                Sex,
                MobileContact,
                Email,
                BusinessName,
                ServiceLocation,
                LengthOfService,
                AdditionalMessage
            });

            const { responseCode, responseMessage } = response.data;

            if (responseCode === 200) {
               
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully Submitted',
                    text: responseMessage || 'Your request has been sent!',
                });
                
            } 
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed',
                    text: responseMessage || 'Please check your details',
                });
            }
        } catch (error) {
            //console.error('Error during submission:', error);
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: error?.response?.data?.message || 'Invalid Details',
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <Box sx={{ paddingTop: 5, textAlign: 'center', color: '#001f2b' }}>
                <h2 className='typo' >
                    Welcome To Our Hiring Service
                </h2>
                <p className='typoP'>
                    Access trained and equipped professionals for any duration. Fill out the form below to request a service.
                </p>
            </Box>

            <Row style={{ flexWrap: 'nowrap', alignItems: 'center' }}>
                <Col lg={6} md={12} className='imageCol' style={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
                    <img src={hire} className='imgSize' alt="Hiring Illustration" style={{ maxWidth: '100%', height: 'auto' }} />
                </Col>
                <Col lg={6} md={12} className='jobCol'>
                    <Form onSubmit={handleSubmit} style={{ width: '90%' }}>
                        <h4 className="logs">HIRE A PROFESSIONAL</h4>
                        <Row>
                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" id="formGroup">
                                        <input type="text" placeholder="Firstname" value={Firstname} onChange={e=> setFirstName(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" id="formGroup">
                                        <input type="text" placeholder="Lastname" value={Lastname} onChange={e=> setLastName(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" id="formGroup">
                                        <input type="email" placeholder="Email" value={Email} onChange={e=> setEmail(e.target.value)}/>
                                    </FormGroup>
                                </Col>


                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" >
                                        <Form.Select  size='md' value={Sex} onChange={e=> setSex(e.target.value)} className='input'>
                                            <option>Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">other</option>
                                        </Form.Select> 
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" id="formGroup">
                                        <input type="text" placeholder="Phone No" value={MobileContact} onChange={e=> setMobileContact(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" id="formGroup">
                                        <input type="text" placeholder="Position/Post" value={Position} onChange={e=> setPosition(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <Col lg='12' md='12'>
                                    <FormGroup className="forms" id="formGroup">
                                        <input type="text" placeholder="Business Name" value={BusinessName} onChange={e=> setBusinessName(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" id="formGroup">
                                        <input type="text" placeholder="Service Location" value={ServiceLocation} onChange={e=> setServiceLocation(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" >
                                        <Form.Select  size='md' value={LengthOfService} onChange={e=> setLengthOfService(e.target.value)} className='input'>
                                            <option value="">Length of Service</option>
                                            <option value="1 Hour">1 Hour</option>
                                            <option value="1 Day">1 Day</option>
                                            <option value="1 Month">1 Month</option>
                                            <option value="Indefinite">Indefinite</option>
                                        </Form.Select> 
                                    </FormGroup>
                                </Col>

                                <Col lg='12' md='12'>
                                <FormGroup className="forms" id="formGroup">
                                <textarea className='input' placeholder="Additional Message" value={AdditionalMessage} onChange={e=> setAdditionalMessage(e.target.value)}>Enter text here...</textarea>
                                </FormGroup>
                                </Col>

                                
                            <Col lg={12}>
                                <Button type="submit" className="btn__login" disabled={loading} style={{ width: '100%' }} onClick={handleSubmit}>
                                    {loading ? <CircularProgress size={24} thickness={5} style={{ color: '#fff' }} /> : 'SUBMIT'}
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default HireJob;
