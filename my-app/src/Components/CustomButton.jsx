import React from 'react';
import Button from '@mui/material/Button';
import rightArrow from '../Assets/right-arrow.png'; 

const baseButtonStyles = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  fontSize: '16px',
  letterSpacing: '-0.05em',
  padding: '8px 16px',
  textTransform: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', 
  borderRadius: 0,
  '&:hover': {
    backgroundColor: '#6e39c2', 
  },
};

const containedButtonStyles = {
  ...baseButtonStyles,
  backgroundColor: '#8447E9',
  color: 'white',
  '&:hover': {
    backgroundColor: '#6e39c2',
  },
};


const outlinedButtonStyles = {
  ...baseButtonStyles,
  backgroundColor: 'transparent', 
  border: '1px solid #8447E9', 
  color: '#8447E9',
  '&:hover': {
    backgroundColor: '#6e39c2',
    borderColor: '#6e39c2',
    color: 'white',
  },
};

const CustomButton = ({ text, onClick, variant = 'contained' }) => {
  const buttonStyles = variant === 'outlined' ? outlinedButtonStyles : containedButtonStyles;

  return (
    <Button
      variant={variant}
      sx={{
        ...buttonStyles,
        fontSize: { xs: '12px', md: '16px' }, 
        padding: { xs: '6px 12px', md: '8px 16px' }, 
      }}
      onClick={onClick}
    >
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
