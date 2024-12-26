import React from 'react';
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
      fontSize: '1.5em',
      letterSpacing: '0.075em',
      color: '#8447E9',
      marginBottom: '1em',
      textAlign: 'left',
    },
    subheading: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 500,
      fontSize: '1em',
      color: '#000',
      marginBottom: '2em',
      textAlign: 'left',
      letterSpacing: '-4%',
      maxWidth: '35%',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
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
      marginBottom: '1em',
    },
    label: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '0.9em',
      fontWeight: '500',
    },
    buttonContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end',
      marginTop: '20px', 
    },
  };

  return (
    <div style={styles.containerStyles}>
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
          <CustomButton text="Learn more" variant="outlined" />
        </div>
      </div>
    </div>
  );
}
