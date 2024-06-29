import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import {Row, Col} from "react-bootstrap";
import Placeholder from 'react-bootstrap/Placeholder';
import image from "../assets/image/images.jpg"
import "../styles/jobVacancy.css";
import PlaceIcon from '@mui/icons-material/Place';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import Swal from 'sweetalert2';



const JobVacancy = () =>{


    return(
        <>
            <div className="vacancy">

            <Container>
                <h3>JOB/TRAINING OPPORTUNITY</h3>
            
                <Row>
                    <Col lg='6' md='12' className='jobCol'>
                        <Card style={{ width: '28rem' }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                            <Card.Title >A Financial Analyst Trainee</Card.Title>
                            <Card.Text>
                                A Financial Analyst trainee at Aiteo Group, Lagos 
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg='6' md='12'>
                        <h4 className='requirement'>VACANCY REQUIREMENTS</h4>
                        <div className="listDiv">
                                <div>
                                    <PlaceIcon />
                                </div>
                                <div className="text">
                                    <h5> 
                                        LOCATION: Lagos, Nigeria.
                                    </h5>          
                                </div>                 
                        </div>

                        <div className="listDiv">
                                <div>
                                    <MenuBookIcon />
                                </div>
                                <div className="text">
                                    <h5> 
                                        EDUCATIONAL QUALIFICATION: Bachelor in Accounting.
                                    </h5>          
                                </div>                 
                        </div>

                        <div className="listDiv">
                                <div>
                                    <DeviceHubIcon />
                                </div>
                                <div className="text">
                                    <h5> 
                                        SKILL: Database, Excel, SPSS etc.
                                    </h5>          
                                </div>                 
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg='6' md='12' className='jobCol'>
                        <Card style={{ width: '28rem' }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                            <Card.Title >A Pharmacy Trainee</Card.Title>
                            <Card.Text>
                                A  Pharmacy Trainee at Pharmacare, Ibadan, Nigeria.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg='6' md='12'>
                        <h4 className='requirement'>VACANCY REQUIREMENTS</h4>
                        <div className="listDiv">
                                <div>
                                    <PlaceIcon />
                                </div>
                                <div className="text">
                                    <h5> 
                                        LOCATION: Lagos, Nigeria.
                                    </h5>          
                                </div>                 
                        </div>

                        <div className="listDiv">
                                <div>
                                    <MenuBookIcon />
                                </div>
                                <div className="text">
                                    <h5> 
                                        EDUCATIONAL QUALIFICATION: Bachelor in Accounting.
                                    </h5>          
                                </div>                 
                        </div>

                        <div className="listDiv">
                                <div>
                                    <DeviceHubIcon />
                                </div>
                                <div className="text">
                                    <h5> 
                                        SKILL: Database, Excel, SPSS etc.
                                    </h5>          
                                </div>                 
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg='6' md='12' className='jobCol'>
                        <Card style={{ width: '28rem' }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                            <Card.Title >Interior Designing Trainee</Card.Title>
                            <Card.Text>
                                An Interior designing Trainee at Hitech Design, Lagos Nigeria.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg='6' md='12'>
                        <h4 className='requirement'>VACANCY REQUIREMENTS</h4>
                        <div className="listDiv">
                                <div>
                                    <PlaceIcon />
                                </div>
                                <div className="text">
                                    <h5> 
                                        LOCATION: Lagos, Nigeria.
                                    </h5>          
                                </div>                 
                        </div>

                        <div className="listDiv">
                                <div>
                                    <MenuBookIcon />
                                </div>
                                <div className="text">
                                    <h5> 
                                        EDUCATIONAL QUALIFICATION: Bachelor in Accounting.
                                    </h5>          
                                </div>                 
                        </div>

                        <div className="listDiv">
                                <div>
                                    <DeviceHubIcon />
                                </div>
                                <div className="text">
                                    <h5> 
                                        SKILL: Database, Excel, SPSS etc.
                                    </h5>          
                                </div>                 
                        </div>
                    </Col>
                </Row>
            </Container>
            
          </div>

        </>
    )
}

export default JobVacancy;