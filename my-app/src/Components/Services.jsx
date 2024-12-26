import React from 'react';
import accupunctureIcon from '../Assets/accupuncture.png';
import exerciseIcon from '../Assets/exercise.png';


const conditions = [
  { id: 1, icon: accupunctureIcon, label: 'Accupuncture' , desc: "Contemporary acupuncture is when small, thin needles are inserted into various points in the body, which stimulates the nervous system to release chemicals in the brain, spinal cord and muscles. These chemicals will change the experience of pain, or they will trigger the release of other chemicals and hormones which influence the body's own internal regulating system. This stimulates the body's natural healing abilities and promotes physical and emotional well-being"},
  { id: 2, icon: exerciseIcon, label: 'Exercise Education', desc: "Individualized exercises to address the specific strengthening and stretching need to help meet your goals, and this could be focused on pre or post pregnancy."},
];

export default function Services() {
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
      marginBottom: '2em',
      textAlign: 'left',
      letterSpacing: '-4%',
      maxWidth: '35%',
    },
    icon: {
      width: '140px',
      height: 'auto',

    },
    label: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '1.3em',
      fontWeight: '500',
      color: '#8447E9',
      paddingBottom: '0.5em',
    },
    buttonContainer: {
      display: 'flex',
      position: 'absolute',
      bottom: '1em',
      right: '1em', 
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '3em'
    },
    textContainer: {
       textAlign: 'left',
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        gap: '3em',
      },

    desc: {
        width: '45em',
        textAlign: 'justify',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '21', 
        letterSpacing: '-0.05em',  
        lineHeight: '25px', 
        margin: 0,
    }


  };

  return (
    <div style={styles.containerStyles}>
      <div style={styles.subContainerStyle}>
        <div style={styles.headingContainer}>
          <h2 style={styles.heading}>SERVICES</h2>
        </div>

        <div style={styles.itemContainer}>
          {conditions.map((condition) => (
            <div key={condition.id} style={styles.card}>
              <img src={condition.icon} alt={condition.label} style={styles.icon} />
              <div style={styles.textContainer}>
                <div style={styles.label}>{condition.label}</div>
                <p style={styles.desc}>{condition.desc}</p>
              </div>
        </div>
          ))}
        </div>
      </div>
    </div>
  );
}
