import React from 'react'
import CustomButton from './CustomButton'; 
import { formHelperTextClasses } from '@mui/material';

const containerStyles = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  marginTop: '8em',
  display: 'flex',
  flexDirection: 'column',
  gap: '45px'
};

const mainTextStyles = {
  fontFamily: 'Epilogue, sans-serif',
  fontWeight: 700,
  fontSize: '76px', 
  letterSpacing: '-2%'
};

const subTextStyles = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  fontSize: '1.5rem',
  letterSpacing: '-4%',
  textAlign: 'center',
   maxWidth: '70%'
};


const highlightedWordStyles = {
  color: '#8447E9', 
};


export default function Hero() {
  return (
    <div style={containerStyles}>
      <div style={mainTextStyles}>Empowering 
        <span style={highlightedWordStyles}> Individuals </span>
        to Thrive
      </div>
      <div style={subTextStyles}>
      Compassionate care for pelvic floor conditions, helping you regain confidence and live pain free
      </div>

      <CustomButton text={'Request an Appointment'}></CustomButton>
    </div>
  )
}
