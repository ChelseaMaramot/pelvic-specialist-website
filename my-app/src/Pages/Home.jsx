import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import { Container } from '@mui/material';
import Conditions from './Conditions';
import ConditionsTreated from '../Components/ConditionsTreated';
import Services from '../Components/Services';
import FAQ from '../Components/FAQ';

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
      <ConditionsTreated />
      <Services></Services>
      <FAQ></FAQ>
      <Contact />
      <Footer />
    </Container>
  );
}
