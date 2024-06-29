import React, {useState} from 'react';
import { Form, Button, Container, FormGroup, Row, Col } from 'react-bootstrap';
import '../../components/Register/traineeRegister.css';
import { Link } from 'react-router-dom';



const PostCareer = () => {

    //const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [source, setSource] = useState("")
    const [gender, setGender] = useState("")
    const [dateofbirth, setDateOfBirth] = useState("")
    const [content, setContent] = useState("")
    
    
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

                            <h4 className="log">POST CAREER</h4>
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
                                        <input type="text" placeholder="Title of Content" value={dateofbirth} onChange={e=> setDateOfBirth(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <Col lg='6' md='12'>
                                    <FormGroup className="forms" id="formGroup">
                                        <input type="text" placeholder=" Source/link" value={source} onChange={e=> setSource(e.target.value)}/>
                                    </FormGroup>
                                </Col>

                                <Col lg='12' md='12'>
                                <FormGroup className="forms" id="formGroup">
                                <textarea className='input' placeholder="Write Your Content" value={content} onChange={e=> setContent(e.target.value)}>Enter text here...</textarea>
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

export default PostCareer;