import React from 'react';
import Button from '@mui/material/Button';
import rightArrow from '../Assets/right-arrow.png'; // Update path as needed

const buttonStyles = {
  backgroundColor: '#8447E9',
  color: 'white',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  fontSize: '16',
  letterSpacing: '-0.05em',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: '#6e39c2',
  },
  textTransform: 'none',
  borderRadius: 0,
  display: 'flex',
  alignItems: 'center',
};

const CustomButton = ({ text, onClick }) => {
  return (
    <Button variant="contained" sx={buttonStyles} onClick={onClick}>
      {text}
      <img
        src={rightArrow}
        alt="Right Arrow"
        style={{
          marginLeft: '8px',
          width: '10px',
          height: '16px',
        }}
      />
    </Button>
  );
};

export default CustomButton;
