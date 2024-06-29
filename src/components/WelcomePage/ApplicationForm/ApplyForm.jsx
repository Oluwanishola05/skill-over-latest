import React, {useState} from 'react';
import { Form, Button, Container, FormGroup, Row, Col } from 'react-bootstrap';
import '../../Register/traineeRegister.css';
import { Link } from 'react-router-dom';



const ApplyForm = () => {

    //const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [qualification, setQualification] = useState("")
    const [resume, setResume] = useState("")
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        var data = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            address: address,
            qualification: qualification,
            resume: resume
        }
        console.log(data);

            // firstname.value = '',
            // lastname.value = '',
            // email.value = '',
            // address.value = '',
            // qualification.value= '',
            // resume.value= ''
      };

    return(
        <>
            <Container className='Container'>
               
                    <div className="register">

                        <Form className="authForm" >

                            <h4 className="log">APPLICATION FORM</h4>
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
                                    <FormGroup className="forms" id="formGroup">
                                        <input type="text" placeholder="Enter your Address" value={address} onChange={e=> setAddress(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" id="formGroup">
                                            <Form.Select  size='md' value={qualification} onChange={e=> setQualification(e.target.value)} className='input'>
                                                <option>Qualifications</option>
                                                <option value="SSCE">SSCE</option>
                                                <option value="DIPLOMA">DIPLOMA</option>
                                                <option value="OND">OND</option>
                                                <option value="BSC">BSC</option>
                                                <option value="BSC">BSC</option>
                                                <option value="MSC">MSC</option>
                                                <option value="MBA">MBA</option>
                                                <option value="OTHERS">OTHERS</option>
                                            </Form.Select> 
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" id="formGroup">
                                        <input type="file" value={resume} onChange={e=> setResume(e.target.value)} className="input"/>
                                    </FormGroup>
                                </Col>

                                <div>
                                    <button type="submit" className="btn__login" onClick={handleSubmit} >
                                        REGISTER
                                    </button>
                                </div>
                            </Row>      
                                        
                        </Form>
                        </div>          
                    
               
            </Container>
        </>
    )
}

export default ApplyForm;