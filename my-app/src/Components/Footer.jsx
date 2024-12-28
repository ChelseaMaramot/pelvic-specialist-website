import React from "react";
import logo from "../Assets/logo.png"; // Import the logo

export default function Footer() {
  return (
    <footer style={{ position: "relative", marginTop: "5em" }}>
      {/* Curved Top */}
      <div
        style={{
          position: "absolute",
          top: "-30px",
          left: 0,
          width: "100%",
          height: "300px",
          backgroundColor: "#000",
          borderRadius: "10% 10% 0 0",
        }}
      ></div>

      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2em 3em",
          flexWrap: "wrap",
          position: "relative",
        }}
      >
        <div style={{ flex: "1", minWidth: "150px", textAlign: "center" }}>
          <img
            src={logo}
            alt="Pearl Logo"
            style={{ width: "150px" }}
          />
        </div>

        <div style={{ flex: "2", minWidth: "250px", textAlign: "left" }}>
          <p style={{ margin: "0", fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
            Mountain Wellness Centre
          </p>
          <p style={{ margin: "1em 0", fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
            437 Concession St, Hamilton ON
          </p>
          <p style={{ margin: "1em 0", fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
            pearlpelvicphysio@gmail.com
          </p>
          <p style={{ margin: "1em 0", fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
            NR: 905-3853338
            <br />
            Cell: 289-4890914
          </p>
        </div>

        <div style={{ flex: "1", minWidth: "150px", textAlign: "left" }}>
          <nav>
            <a
              href="#home"
              style={{
                display: "block",
                color: "#fff",
                textDecoration: "none",
                margin: "0.5em 0",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
              }}
            >
              Home
            </a>
            <a
              href="#about"
              style={{
                display: "block",
                color: "#fff",
                textDecoration: "none",
                margin: "0.5em 0",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
              }}
            >
              About
            </a>
            <a
              href="#services"
              style={{
                display: "block",
                color: "#fff",
                textDecoration: "none",
                margin: "0.5em 0",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
              }}
            >
              Services
            </a>
            <a
              href="#location"
              style={{
                display: "block",
                color: "#fff",
                textDecoration: "none",
                margin: "0.5em 0",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
              }}
            >
              Location
            </a>
            <a
              href="#contact"
              style={{
                display: "block",
                color: "#fff",
                textDecoration: "none",
                margin: "0.5em 0",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
              }}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
