import React from 'react';
import CustomButton from './CustomButton';

const containerStyles = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  marginTop: '5em',
  display: 'flex',
  flexDirection: 'column',
  gap: '2em', 
  padding: '0 1rem', 
};

const mainTextStyles = {
  fontFamily: 'Epilogue, sans-serif',
  fontWeight: 700,
  fontSize: 'clamp(2rem, 5vw, 4.75rem)', 
  letterSpacing: '-2%',
  lineHeight: '1.2', 
};

const subTextStyles = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  fontSize: 'clamp(0.9rem, 2.5vw, 1.5rem)', 
  letterSpacing: '-1%',
  textAlign: 'center',
  maxWidth: '70%',
};

const highlightedWordStyles = {
  color: '#8447E9',
};

export default function Hero() {
  return (
    <div style={containerStyles}>
      <div style={mainTextStyles}>
        Empowering 
        <span style={highlightedWordStyles}> Individuals </span>
        to Thrive
      </div>
      <div style={subTextStyles}>
        Compassionate care for pelvic floor conditions, helping you regain confidence and live pain free
      </div>
      <CustomButton text={'Request an Appointment'} />
    </div>
  );
}
