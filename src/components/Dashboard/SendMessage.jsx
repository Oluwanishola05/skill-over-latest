import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

import './DashStyle/GetTrainee.css';
import { Button } from '@mui/material';

const SendMessage = () => {
  const [receiver, setReceiver] = useState('');
  const [message, setMessage] = useState('');

  const handleReceiverChange = (e) => {
    setReceiver(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    // Here you can implement the logic to send the message
    console.log('Message sent to', receiver, ':', message);
    // You might want to reset the input fields after sending
    setReceiver('');
    setMessage('');
  };

  return (
    <div>

        <h4>SEND MESSAGE</h4>

      <TextField
        label="Receiver Email"
        variant="outlined"
        value={receiver}
        onChange={handleReceiverChange}
        fullWidth
        margin="normal"
        style={{ width: '500px' }}
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
        style={{ width: '500px' }}
      />

        <br/>
            
        <Button variant="contained" startIcon={<SendIcon className="slanted-icon"/>} onClick={sendMessage}>
            SEND
        </Button>
                
            
    </div>
  );
};

export default SendMessage;
