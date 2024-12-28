import React, { useState, useEffect, useRef } from 'react';
import { TextField, Grid } from '@mui/material';
import CustomButton from './CustomButton';

export default function Contact() {
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
    // Update mapHeight when component mounts or contactContainerRef changes
    const contactHeight = contactContainerRef.current ? contactContainerRef.current.offsetHeight : 0;
    setMapHeight(contactHeight);
    
    // Optional: Recalculate map height on window resize if needed
    const handleResize = () => {
      const contactHeight = contactContainerRef.current ? contactContainerRef.current.offsetHeight : 0;
      setMapHeight(contactHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Clean up the event listener
  }, []); // Runs only once when component mounts

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
    contactContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '5px',
      textAlign: 'left',
      marginLeft: '6.2em',
      marginRight: '6.2em',
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1em',
      width: '50%',
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
    },
    mapContainer: {
      width: '80%',
      borderRadius: '8px',
      border: '2px solid #ddd',
      height: mapHeight, 
    },
    mapIframe: {
      width: '100%',
      height: '100%',
      border: '0',
    },
    formContainer: {
      marginTop: '4em',
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
      marginBottom: '1.5em',
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
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={styles.containerStyles}>
      <div style={styles.subContainerStyle}>
        <div style={styles.headingContainer}>
          <h2 style={styles.heading}>GET IN TOUCH</h2>
        </div>

        <div ref={contactContainerRef} style={styles.contactContainer}>
          <div style={styles.contactInfo}>
            <div style={styles.contactText}>
              <span style={styles.contactLabel}>Phone:</span><br />
              NR: 905-3853338<br />
              Cell: 289-4890914
            </div>
            <div style={styles.contactText}>
              <span style={styles.contactLabel}>Email:</span><br />
              pearlpelvicphysio@gmail.com
            </div>
            <div style={styles.contactText}>
              <span style={styles.contactLabel}>Address:</span><br />
              Mountain Wellness Centre<br />
              437 Concession St, Hamilton ON
            </div>
          </div>

          <div style={styles.mapContainer}>
            <iframe
              style={styles.mapIframe}
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=437%20Concession%20St,%20Hamilton%20ON+(Mountain%20Wellness%20Centre)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
          </div>
        </div>

        <div style={styles.formContainer}>
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
           <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2em' }}>
            <CustomButton
              type="submit"
              text={'Send Message'}
              sx={styles.submitButton}
            />
          </div>

          </form>
        </div>
      </div>
    </div>
  );
}
