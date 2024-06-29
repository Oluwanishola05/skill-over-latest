import React, {useState} from 'react';
import { Form, Button, Container, FormGroup, Row, Col } from 'react-bootstrap';
import '../../components/Register/traineeRegister.css';
import { Link } from 'react-router-dom';



const PostTraining = () => {

    //const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [telephone, setTelephone] = useState("")
    const [gender, setGender] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [address, setAddress] = useState("")
    const [industry, setIndustry] = useState("")
    const [position, setPosition] = useState("")
    const [trainingTitle, setTrainingTitle] = useState("")
    const [numberOfTraining, setNumberOfTraining] = useState("")
    const [displayInfo, setDisplayInfo] = useState("")
    const [message, setMessage] = useState("")
    
    
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

                            <h4 className="log">POST TRAINING/JOB OPPORTUNITY</h4>
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
                                        <input type="tel" placeholder="Mobile Number" value={telephone} onChange={e=> setTelephone(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" id="formGroup">
                                        <input type="text" placeholder="Company Name" value={companyName} onChange={e=> setCompanyName(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                
                                <Col lg='6' md='12'>
                                <FormGroup className="forms" id="formGroup">
                                <input type="text" placeholder="Address" value={address} onChange={e=> setAddress(e.target.value)}/>
                                </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                <FormGroup className="forms" id="formGroup">
                                <input type="text" placeholder="Industry" value={industry} onChange={e=> setIndustry(e.target.value)}/>
                                </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                <FormGroup className="forms" id="formGroup">
                                <input type="text" placeholder="Position In Company" value={position} onChange={e=> setPosition(e.target.value)}/>
                                </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                <FormGroup className="forms" id="formGroup">
                                <input type="text" placeholder="Training Title" value={trainingTitle} onChange={e=> setTrainingTitle(e.target.value)}/>
                                </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                <FormGroup className="forms" id="formGroup">
                                <input type="text" placeholder="Number of Training" value={numberOfTraining} onChange={e=> setNumberOfTraining(e.target.value)}/>
                                </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                <FormGroup className="forms" id="formGroup">
                                <input type="text" placeholder="Training Title" value={trainingTitle} onChange={e=> setTrainingTitle(e.target.value)}/>
                                </FormGroup>
                                </Col>
                                
                                <Col lg='12' md='12'>
                                    <FormGroup className="forms" >
                                        <Form.Select  size='md' value={displayInfo} onChange={e=> setDisplayInfo(e.target.value)} className='input'>
                                            <option>Display Info</option>
                                            <option value="public">Public</option>
                                            <option value="annonymous">Annonymous</option>
                                            
                                        </Form.Select> 
                                    </FormGroup>
                                </Col>

                                <Col lg='12' md='12'>
                                <FormGroup className="forms" id="formGroup">
                                <textarea className='input' value={message} onChange={e=> setMessage(e.target.value)}>Enter text here...</textarea>
                                </FormGroup>
                                </Col>


                                <div>
                                    <button type="submit" className="btn__login" >
                                        SUBMIT
                                    </button>
                                </div>
                            </Row>      
                                        
                        </Form>
                        </div>          
                    
               
            </Container>
        </>
    )
}

export default PostTraining;