// src/pages/Home.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1">
        I’m a software developer with a passion for creating impactful projects.
      </Typography>
    </Container>
  );
};

export default Home;
