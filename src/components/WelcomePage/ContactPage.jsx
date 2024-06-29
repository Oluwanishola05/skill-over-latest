import React, {useState} from 'react';
import { Form,  Container, FormGroup, Row, Col } from 'react-bootstrap';

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';


import { Button } from '@mui/material';


const ContactPage = () => {

    const [email, setEmail] = useState('');
    const [fullname, setFullName] = useState('');
    const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    // Here you can implement the logic to send the message
    console.log('Message sent to Admin',  ':', message);
    // You might want to reset the input fields after sending
    setEmail('');
    setFullName('');
    setMessage('');
  };

    return(
        <>
            <div className='contactDiv'>
                <Container>
                    <h4>SEND US A MAIL</h4>

                        <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                        fullWidthtotalTrainee
                        margin="normal"
                        style={{ width: '400px', paddingRight:'30px', }}
                        />
                        

                        <TextField
                        label="FULLNAME"
                        variant="outlined"
                        value={fullname}
                        onChange={handleFullNameChange}
                        fullWidth
                        margin="normal"
                        style={{ width: '400px',  }}
                        />
                        <br/>

                        <TextField
                        label="Message"
                        variant="outlined"
                        value={message}
                        onChange={handleMessageChange}
                        fullWidth
                        multiline
                        rows={7}
                        margin="normal"
                        style={{ width: '800px' }}
                        />

                        <br/>
                            
                        <Button variant="contained" startIcon={<SendIcon className="slanted-icon"/>} onClick={sendMessage}>
                            SEND
                        </Button>
                </Container>
            </div>
        </>
    )
}

export default ContactPage;