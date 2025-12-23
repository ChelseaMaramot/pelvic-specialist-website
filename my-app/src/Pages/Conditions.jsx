import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Container } from '@mui/material';
import ConditionsContent from '../Components/ConditionsContent';
import ConditionsHero from '../Components/ConditionsHero';

export default function Conditions() {
  return (
    <Container
    maxWidth={false} 
    disableGutters  
    sx={{
      mt: '25px',
    }}
  >
    <Navbar />
    <ConditionsHero></ConditionsHero>
    <ConditionsContent></ConditionsContent>
    <Footer />
  </Container>
  )
}
