import React, {useState} from 'react';
import { Form, Button, Container, FormGroup, Row, Col } from 'react-bootstrap';
import './traineeRegister.css';
import { Link } from 'react-router-dom';



const TrainerRegister = () => {

    //const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [location, setLocation] = useState("")
    const [gender, setGender] = useState("")
    const [dateofbirth, setDateOfBirth] = useState("")
    const [telephone, setTelephone] = useState("")
    const [nin, setNIN] = useState("")
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log();
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
                                        <input type="date" placeholder="Date Of Birth" value={dateofbirth} onChange={e=> setDateOfBirth(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" id="formGroup">
                                        <input type="tel" placeholder="Telephone" value={telephone} onChange={e=> setTelephone(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <FormGroup className="forms" id="formGroup">
                                <input type="text" placeholder="NIN" value={nin} onChange={e=> setNIN(e.target.value)}/>
                                </FormGroup>

                                <div>
                                    <button type="submit" className="btn__login" >
                                        REGISTER
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