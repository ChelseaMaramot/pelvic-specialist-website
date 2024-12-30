import React from "react";
import logo from "../Assets/logo.png";

const footerStyles = {
  position: "relative",
  marginTop: "5em",
};

const curvedDivStyles = {
  position: "absolute",
  top: "-30px",
  left: 0,
  width: "100%",
  height: "300px",
  backgroundColor: "#000",
  borderRadius: "10% 10% 0 0",
};

const footerContentStyles = {
  backgroundColor: "#000",
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2em 3em",
  flexWrap: "wrap",
  position: "relative",
};

const sectionStyles = {
  flex: "1",
  minWidth: "150px",
  textAlign: "center",
};

const infoSectionStyles = {
  flex: "2",
  minWidth: "250px",
  textAlign: "left",
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 400,
  marginLeft: '1em',
  marginTop: '1em',
  textAlign: {xs: 'center', sm:'left'}
};

const navStyles = {
  flex: "1",
  minWidth: "150px",
  textAlign: {xs: 'center', sm:'left'}
};

const linkStyles = {
  display: "block",
  color: "#fff",
  textDecoration: "none",
  margin: "0.5em 0",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 400,
};


const paragraphStyles = {
  fontSize: '0.9em'
};

const contactInfoStyles = {
  margin: '0',
};


export default function Footer() {
  return (
    <footer style={footerStyles}>
      <div style={curvedDivStyles}></div>

      <div style={footerContentStyles}>
        <div style={sectionStyles}>
          <img src={logo} alt="Pearl Logo" style={{  width: window.innerWidth <= 600 ? "100px" : "150px" }} />
        </div>

        <div style={infoSectionStyles}>
          <p style={contactInfoStyles}>Mountain Wellness Centre</p>
          <p style={paragraphStyles}>437 Concession St, Hamilton ON</p>
          <p style={paragraphStyles}>pearlpelvicphysio@gmail.com</p>
          <p style={paragraphStyles}>
            NR: 905-3853338
            <br />
            Cell: 289-4890914
          </p>
        </div>

        <div style={navStyles}>
          <nav>
            <a href="#home" style={linkStyles}>
              Home
            </a>
            <a href="#about" style={linkStyles}>
              About
            </a>
            <a href="#services" style={linkStyles}>
              Services
            </a>
            <a href="#location" style={linkStyles}>
              Location
            </a>
            <a href="#contact" style={linkStyles}>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
