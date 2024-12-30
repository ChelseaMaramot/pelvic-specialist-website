import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import IncontinenceIcon from '../Assets/incontinence.png';
import ProlapseIcon from '../Assets/prolapse.png';
import VaginismusIcon from '../Assets/vaginismus.png';
import DiastasisIcon from '../Assets/diastasis.png';
import BackPainIcon from '../Assets/back-pain.png';
import CustomButton from './CustomButton';

const conditions = [
  { id: 1, icon: IncontinenceIcon, label: 'Incontinence' },
  { id: 2, icon: ProlapseIcon, label: 'Pelvic Organ Prolapse' },
  { id: 3, icon: VaginismusIcon, label: 'Vaginismus' },
  { id: 4, icon: DiastasisIcon, label: 'Diastasis Rectus Abdominis' },
  { id: 5, icon: BackPainIcon, label: 'Pregnancy related hip and lower back pain' },
];

export default function ConditionsTreated() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); 
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    containerStyles: {
      display: 'flex',
      flexDirection: 'row',
      paddingTop: '2em',
      paddingBottom: '2em',
      position: 'relative',
    },
    subContainerStyle: {
      display: 'flex',
      flexDirection: 'column',
      width: '86%',
      margin: '0 auto',
      position: 'relative',
    },
    headingContainer: {
      marginBottom: '2em',
    },
    heading: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 500,
      fontSize: 'clamp(1.2rem, 1,5em, 1.5em)',
      letterSpacing: '0.075em',
      color: '#8447E9',
      marginBottom: '1em',
      textAlign: 'left',
    },
    subheading: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 500,
      fontSize: 'clamp(0.5rem, 1em, 1 em)',
      color: '#000',
      marginBottom: '2em',
      textAlign: isSmallScreen ? 'center' : 'left',
      letterSpacing: '-4%',
      maxWidth: isSmallScreen ? '100%' : '35%',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isSmallScreen ? '1fr' : 'repeat(3, 1fr)', 
      gap: '2em',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    icon: {
      width: '130px',
      height: 'auto',
      marginBottom: '0.5em',
    },
    label: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '0.9em',
      fontWeight: '500',
    },
    buttonContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      marginTop: '20px', 
    },
  };

  const handleButtonClick = () => {
    window.scrollTo(0, 0);
    navigate('/conditions');
  };


  return (
    <div id="services" style={styles.containerStyles}>
      <div style={styles.subContainerStyle}>
        <div style={styles.headingContainer}>
          <h2 style={styles.heading}>PELVIC CONDITIONS TREATED</h2>
          <p style={styles.subheading}>
            Discover expert care and personalized treatment for a wide range of pelvic health concerns
          </p>
        </div>
        <div style={styles.grid}>
          {conditions.map((condition) => (
            <div key={condition.id} style={styles.card}>
              <img src={condition.icon} alt={condition.label} style={styles.icon} />
              <p style={styles.label}>{condition.label}</p>
            </div>
          ))}
        </div>
        <div style={styles.buttonContainer}>
          <CustomButton text="Learn more" variant="outlined" onClick={handleButtonClick}/>
        </div>
      </div>
    </div>
  );
}
