// src/pages/Contact.js
import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <TextField fullWidth label="Your Name" margin="normal" />
      <TextField fullWidth label="Your Email" margin="normal" />
      <TextField fullWidth label="Message" multiline rows={4} margin="normal" />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Send Message
      </Button>
    </Container>
  );
};

export default Contact;
