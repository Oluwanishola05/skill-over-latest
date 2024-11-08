import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../WelcomePage/home.css"
import comStudent from "../../assets/image/comStudent.png";
import {Row, Col} from "react-bootstrap";
import laptopGirl from "../../assets/image/laptopGirl.png";

import BorderColorIcon from '@mui/icons-material/BorderColor';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import PushPinIcon from '@mui/icons-material/PushPin';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import JobVacancy from "../jobVacancy";
import ContactPage from "./ContactPage";
import axios, {AxiosResponse} from "axios";



const Home = () => { 

    // useEffect(() => {
    //     axios.get('')
    //     .then((response) => {
    //         console.log(response.data);
        
    //     })
    // }, [])
    
    return(
        <>
            <div className="welcome">
                 <Container maxWidth="sm"> 
                    <div>
                        <img src={comStudent} alt="" className="studentImg"/>
                    </div>

                    <div className="skillDiv">
                        <h3 className="skill">Welcome to 
                            <span className="over"> SKILLOVAL</span>
                        </h3>
                        <p className="details"> Are you willing to learn or teach, 
                            Register today and grow more in your Field. 
                        </p>

                        <a href='selectUser'>
                            <button className="vv">
                                Get Started
                            </button>
                        </a>
                    </div> 
                </Container>   
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path fill="#CAF3F9" fill-opacity="1" d="M0,192L60,165.3C120,139,240,85,360,53.3C480,21,600,11,720,21.3C840,32,960,64,1080,69.3C1200,75,1320,53,1380,42.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            

            <div>
                <Container>
                    <Row>
                        <Col lg='6' md='12'>
                            <img src={laptopGirl} alt="" />
                        </Col>

                        <Col lg='6' md='12'>
                            <div>    
                                <div className="upgrade">                               
                                    <h2 className="advance">
                                        {/* <UpgradeIcon color="primary" sx={{ fontSize: 60 }}/> */}
                                        Advance In Your Game, it's easy
                                    </h2>

                                    <div className="listDiv">
                                        <div>
                                             <BorderColorIcon />
                                        </div>

                                        <div className="text">
                                            <h4> 
                                                No cost to join
                                            </h4>
                                            <p>Register and browse professionals, explore projects, or even book a consultation.</p>
                                           
                                        </div>           
                                    </div>

                                    <div className="listDiv">
                                        <div>
                                             <PushPinIcon />
                                        </div>

                                        <div className="text">
                                            <h4> 
                                                Post a job and hire top talent
                                            </h4>
                                            <p>Finding talent doesn’t have to be a chore. Post a job or we can search for you!</p>
                                           
                                        </div>           
                                    </div>

                                    <div className="listDiv">
                                        <div>
                                             <AutoAwesomeIcon />
                                        </div>

                                        <div className="text">
                                            <h4> 
                                                Work with the best—without breaking the bank
                                            </h4>
                                            <p>SkillOver makes it affordable to up your work and take advantage of low transaction rates.</p>
                                           
                                        </div>           
                                    </div>
                                    
                                </div>
                            </div>
                           
                            
                        </Col>
                    </Row>

                    
                </Container>
                
            </div>




            <JobVacancy/>
            <ContactPage/>
            

          
              
                
        </>
    )
}

export default Home;