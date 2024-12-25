import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <Container
      maxWidth={false} 
      disableGutters  
      sx={{
        mt: '25px',
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </Container>
  );
}
