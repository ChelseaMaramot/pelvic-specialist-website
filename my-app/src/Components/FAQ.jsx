import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: "What happens when you see a pelvic floor physiotherapist?",
    answer: `When you see a physiotherapist, they will take a full history of your bladder 
    and bowel function, medical and surgical history. Your pelvic floor muscles are usually 
    examined. Part of this assessment might be an internal assessment. Your physiotherapist 
    will go through that with you before doing an internal assessment.`,
  },
  {
    question: "How your treatment will look?",
    answer: `This could include exercises, biofeedback (electronic monitoring), and manual 
    treatment of the muscles. Advice about daily activities and fitness, as well as good 
    bladder and bowel habits, will be given. Functional training of the pelvic floor gets 
    your muscles back working effectively when you need them.`,
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

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
      fontSize: 'clamp(1.2em, 1.5em, 1.5em)',
      letterSpacing: '0.075em',
      color: '#8447E9',
      marginBottom: '1em',
      textAlign: 'left',
    },
    accordion: (isOpen) => ({
      boxShadow: 'none',
      backgroundColor: isOpen ? '#f3ebfd' : '#FAF6FF',
      transition: 'background-color 0.3s ease',
      border: 'none', 
      marginBottom: 0, 
    }),
    questionText: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 'clamp(0.8em, 1.3em, 1.5em)',
      padding: '20px',
    },
    answerText: {
      fontFamily: 'Montserrat, sans-serif',
      textAlign: 'left',
      fontSize:  'clamp(1em, 2.5vw, 1em)'
    },
    accordionSummary: {
      minHeight: '10px',
      display: 'flex',
      alignItems: 'center',
    },
    accordionDetails: {
      marginLeft: '6.2em',
      marginRight: '6.2em',
      paddingTop: '0',   
      marginTop: '0', 
      marginBottom: '30px',
    },
    number: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold',
      color: '#9D96A8',
      fontSize: 'clamp(2em, 3em, 3em)',
      marginRight: '10px', 
      
    },
    accordionContent: {
      display: 'flex',
      alignItems: 'flex-start', 
      marginLeft: '1.5em',
      marginRight: '1.5em',
      alignItems: 'center',
    },
  };

  return (
    <div style={styles.containerStyles}>
      <div style={styles.subContainerStyle}>
        <div style={styles.headingContainer}>
          <h2 style={styles.heading}>FREQUENTLY ASKED QUESTIONS</h2>
        </div>
        {faqs.map((faq, index) => {
          const isOpen = expanded === index;
          return (
            <Accordion
              key={index}
              style={styles.accordion(isOpen)}
              expanded={isOpen}
              onChange={handleChange(index)}
              square // Ensures sharp rectangle edges
              disableGutters // Removes default MUI padding/margin
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                style={styles.accordionSummary}
              >
                <div style={styles.accordionContent}>
                  <Typography style={styles.number}>{`${index + 1 < 10 ? '0' : ''}${index + 1}`}</Typography>
                  <Typography style={styles.questionText}>{faq.question}</Typography>
                </div>
              </AccordionSummary>

              <AccordionDetails style={styles.accordionDetails}>
                <Typography style={styles.answerText}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
