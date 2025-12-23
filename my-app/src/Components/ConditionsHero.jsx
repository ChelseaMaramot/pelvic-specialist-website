import React from 'react';
import { Link } from 'react-router-dom';  // Import Link to handle navigation

const containerStyles = {
  backgroundColor: '#E1DBF6',
  padding: '2em',
  textAlign: 'center',
  paddingBottom: '5em',
  marginTop: '50px',
};

const titleStyles = {
  color: '#8447E9',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: '600',
  fontSize: '0.7em',
  textAlign: 'left',
  margin: '2rem auto',
  width: '80%',
  letterSpacing: '1.5px' 
};

const descriptionStyles = {
  color: '#000000',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: '500',
  fontSize: '1.2em',
  textAlign: 'center',
  width: '65%',
  margin: '0 auto',
  letterSpacing: '1px',
};

const breadcrumbContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '0.9em',
  color: '#8447E9',
  marginBottom: '1.5em',
};

const breadcrumbItem = {
  marginRight: '5px',
};

const arrowStyle = {
  marginRight: '5px',
};

export default function ConditionsHero() {
  return (
    <div style={containerStyles}>
      <div style={breadcrumbContainer}>
        <Link to="/" style={breadcrumbItem}>
          Home
        </Link>
        <span style={arrowStyle}>&gt;&gt;</span>
        <span style={breadcrumbItem}>Learn More About Pelvic Conditions</span>
      </div>

      <div style={titleStyles}>
        PELVIC CONDITIONS TREATED
      </div>
      <p style={descriptionStyles}>
        Pelvic floor conditions occur when pelvic muscles and connective tissues weaken
        or become tighter due to different reasons such as a hysterectomy, childbirth,
        aging, hormonal changes, emotional stress, or injuries related to lower back and
        hip.
      </p>
    </div>
  );
}
