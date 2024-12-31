import React, { useState, useEffect, useRef } from 'react';
import { TextField, Grid, Box } from '@mui/material';
import CustomButton from './CustomButton';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const emailServiceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const emailTemplateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const userId = process.env.REACT_APP_USER_ID;

  const [mapHeight, setMapHeight] = useState(0);
  const contactContainerRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const contactHeight = contactContainerRef.current ? contactContainerRef.current.offsetHeight : 0;
    setMapHeight(contactHeight);
    
    const handleResize = () => {
      const contactHeight = contactContainerRef.current ? contactContainerRef.current.offsetHeight : 0;
      setMapHeight(contactHeight);
    };

    window.addEventListener('resize', handleResize);
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
      fontSize: 'clamp(1.2rem, 4vw, 1.5em)',
      letterSpacing: '0.075em',
      color: '#8447E9',
      marginBottom: '1em',
      textAlign: 'left',
    },
    contactContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: '5px',
      textAlign: 'left',
      marginRight: {xs: 0, md:'6.2em'},
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1em',
      width: '50%',
      marginLeft: '6.2em',
      marginBottom: '2em'
    },
    contactText: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 400,
      fontSize: '1em',
    },
    contactLabel: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      fontSize: '1.3em',
      color: '#8447E9',
      marginBottom: '0.5em',
    },
    mapContainer: {
      width: '80%',
      borderRadius: '8px',
      border: '2px solid #ddd',
      height: '20em', 
      margin: '0 auto'
    },
    mapIframe: {
      width: '100%',
      height: '100%',
      border: '0',
    },
    formContainer: {
      marginTop: '3em',
      marginLeft: '6.2em',
      marginRight: '6.2em',
    },
    formField: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderWidth: '1px', 
        },
        '&:hover fieldset': {
          borderColor: '#8447E9', 
        },
        '&.Mui-focused fieldset': {
          borderColor: '#8447E9', 
        },
      },    
      '& .MuiInputLabel-root': {
        color: '#000',
        '&.Mui-focused': {
          color: '#8447E9',
        },
      },
      marginBottom: '0.5em',
    },

    submitButton: {
      backgroundColor: '#8447E9',
      color: 'white',
      '&:hover': {
        backgroundColor: '#6c3dcb',
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {

    console.log("in hanlde submit")
    console.log(emailServiceId, emailTemplateId, userId);
    console.log(formData);

    e.preventDefault();

    emailjs   
    .sendForm(emailServiceId, emailTemplateId, e.target, userId)
    .then(
      (result) => {
        console.log('Message sent successfully:', result.text);
        alert('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        }); 
      },
      (error) => {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again.');
      }
    )
  };

  return (
    <div id="location" style={styles.containerStyles}>
      <div style={styles.subContainerStyle}>
        <div style={styles.headingContainer}>
          <h2 style={styles.heading}>GET IN TOUCH</h2>
        </div>

        <Box ref={contactContainerRef} sx={{...styles.contactContainer, flexDirection: { xs: 'column', md: 'row' }, }}>
          <div style={styles.contactInfo}>
            <Box sx={{...styles.contactText, textAlign: { xs: 'center', md: 'left' }}}>
              <div style={styles.contactLabel}>Phone:</div>
              NR: 905-3853338<br />
              Cell: 289-4890914
            </Box>
            <Box sx={{...styles.contactText, textAlign: { xs: 'center', md: 'left' }}}>
              <div style={styles.contactLabel}>Email:</div>
              pearlpelvicphysio@gmail.com
            </Box>
            <Box sx={{...styles.contactText, textAlign: { xs: 'center', md: 'left' }}}>
              <div style={styles.contactLabel}>Address:</div>
              Mountain Wellness Centre<br />
              437 Concession St, Hamilton ON
            </Box>
          </div>

          <Box sx={styles.mapContainer}>
            <iframe
              style={styles.mapIframe}
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=437%20Concession%20St,%20Hamilton%20ON+(Mountain%20Wellness%20Centre)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
          </Box>
        </Box>

        <Box style={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  sx={styles.formField}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  sx={styles.formField}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={styles.formField}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  sx={styles.formField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  sx={styles.formField}
                />
              </Grid>
            </Grid>

           <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>
            <CustomButton
              type="submit"
              text={'Send Message'}
              sx={styles.submitButton}
            />
          </div>

          </form>
        </Box>
      </div>
    </div>
  );
}
