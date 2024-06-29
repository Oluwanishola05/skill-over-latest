import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import candidate from '../assets/image/trainee.svg'
import '../styles/selectUser.css';
import { Link } from 'react-router-dom';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';


const SelectUser = () => {

    return(
        <>
            <Container>
                <Row className='row'>
                    <div>
                        <h3 className='selectText'>Join as a Trainee or Trainer</h3>
                    </div>
                  <Col lg='6' md='12'  className='content'>
                        <div>
                            <GroupsIcon style={{ fontSize: '3rem',  color: 'blue' }}/>
                            <h4>TRAINEE</h4>
                            <p className='traineeText'>You Can Switch Your Career Into Tech By Taking A Course. 
                                Join Us Today As A Trainee 
                            </p>

                                
                                 <Button className='btn'>
                                   <a href='loginTrainee'>SIGN IN</a> 
                                 </Button>
                                

                        </div>
                  </Col>

                  <Col lg='6' md='12' className='contents'>

                        <div>
                        <SchoolIcon style={{ fontSize: '3rem',  color: 'blue' }}/>
                            <h4>TRAINER</h4>
                            <p className='traineeText'>
                                You Can Become A Tech Intructor
                                By Taking A Course or More. 
                                Join Us Today As A Trainer 
                            </p>

                            
                                
                                 <Button className='btn'>
                                    <a href='loginTrainer'>SIGN IN</a> 
                                 </Button>
                                
                            
                        </div>
                  </Col>
                </Row>
            </Container>
        </>
    )
}

export default SelectUser;