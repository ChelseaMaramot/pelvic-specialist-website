import React from 'react'

import masi from '../Assets/masi.jpg';
import '../Styles/wave.css';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  backgroundColor: '#E1DBF6', 
  marginTop: '10em',
  paddingTop: '5em',
  paddingBottom: '5em',
};

const subContainerStyle = {
  display: 'flex',
  maxWidth: '90%',
  flexDirection: 'row',
  margin: '0 auto',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap', 
}

const aboutHeadingStyles = {
  fontFamily: 'Montserrat, sans-serif', 
  fontWeight: 500,  
  fontSize: 'clamp(1.2rem, 4vw, 1.5em)',
  letterSpacing: '0.075em',  
  color: '#8447E9',
  marginBottom: '1em',  
  textAlign: 'left',  
};

const paragraphStyles = {
  flex: 1,  
  padding: '0 2em',  
  fontFamily: 'Montserrat, sans-serif',
  fontSize: 'clamp(0.8rem, 1em, 1.2rem)',
  letterSpacing: '-0.05em',  
  lineHeight: '1.6em',
  textAlign: 'left',
  
};

const imageStyles = {
  width: '18em',
  height: '19rem',
  overflow: 'hidden',
  position: 'relative',
  borderRadius: '50%'
}



export default function About() {
  return (
    <div  id= "about" style={containerStyles}>
      <div style={subContainerStyle}>
          <div style={paragraphStyles}>
            <div style={aboutHeadingStyles} >ABOUT</div>
            <p>Sarah Masoomeh is a highly skilled physiotherapist with an international background,
            holding a Bachelor’s in Physiotherapy from the University of Amsterdam and a Master’s
            from the University of Coventry in England. Since becoming licensed in Canada, she
            has gained extensive experience treating patients with musculoskeletal and
            neurological conditions, making her a trusted figure in the field.</p>
            <p>In 2017, Sarah Masoomeh specialized in pelvic health, driven by a passion to support
            women with pelvic floor concerns, particularly through the unique challenges of pre- and
            post-partum.</p>
            <p>A first-generation Canadian, Sarah Masoomeh is fluent in Farsi and Dutch and speaks
            conversational Turkish, allowing her to connect with patients from diverse backgrounds.</p>
            <p>When not treating clients, Sarah participate in continuing her education, enjoys
            spending time with her family and doing outdoor activities and yoga.</p>
          </div>

          <div style={imageStyles}>
            <img
              src={masi}
              alt="Masked Image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                clipPath: 'ellipse(50% 60% at 50% 50%)', 
              }}
            />
          </div>
          <div class="wavy-line wavy-line-purple" data-text="xxxxxxxxxxxxxxxxxxxxx"></div>
      </div>
    </div>
  )
}
