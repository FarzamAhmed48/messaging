import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Paper } from '@mui/material';

function App() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const handleMessageChange = (event) => {
    setMessageInput(event.target.value);
  };

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      setMessages([...messages, { text: messageInput, sender: 'user' }]);
      setMessageInput('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: 20, marginTop: 20 }}>
        <h1>Simple Messaging App</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {messages.map((message, index) => (
              <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
                <p style={{ backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#FFFFFF', padding: 10, borderRadius: 5, display: 'inline-block' }}>
                  {message.text}
                </p>
              </div>
            ))}
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Type your message..."
              value={messageInput}
              onChange={handleMessageChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={sendMessage}>
              Send
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;