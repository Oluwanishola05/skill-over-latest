import React, {useState} from "react";
import {Row, Col, Form, FormGroup } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import "../../styles/Login.css";
import axios from "axios";


const TrainerLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handlePost = (e) => {
        e.preventDefault()

       

        axios.post('https://localhost:7051/api/User/TraineeLogin', {
            email: email,
            password: password
        })
        .then(result =>{
            alert(result.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

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
    
                <div>
                    <button type="submit" className="btn__login" onClick={handlePost}>
                        LOGIN
                    </button>
                </div>
                    <p>Don't have an account? <Link to='/trainerRegister'>Create a trainee account</Link></p>
                               
            </form>
            </div>           
            
               
        </Container>
        </>
    )
}

export default TrainerLogin;