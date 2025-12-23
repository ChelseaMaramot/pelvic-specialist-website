import { useEffect, useState } from "react";

export default function Reviews() {
  const [hasReviews, setHasReviews] = useState(false);

  const styles = {
    containerStyles: {
      display: "flex",
      flexDirection: "row",
      paddingTop: "2em",
      paddingBottom: "2em",
      position: "relative",
    },
    subContainerStyle: {
      display: "flex",
      flexDirection: "column",
      width: "86%",
      margin: "0 auto",
      position: "relative",
    },
    headingContainer: {
      marginBottom: "2em",
    },
    heading: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 500,
      fontSize: "1.5em",
      letterSpacing: "0.075em",
      color: "#8447E9",
      marginBottom: "1em",
      textAlign: "left",
      textTransform: "uppercase", 
    },
  };

  // Hide unwanted SociableKit text
  const hideWidgetHeaderStyle = `
    .sk-ww-google-reviews .tutorial_link,
    .sk-ww-google-reviews .sk-header,
    .sk-ww-google-reviews [class*="title"],
    .sk-ww-google-reviews [class*="header"],
    .sk-ww-google-reviews h2,
    .sk-ww-google-reviews h3 {
      display: none !important;
    }
  `;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="google-reviews-section" style={styles.containerStyles}>
      <style>{hideWidgetHeaderStyle}</style>
      <div style={styles.subContainerStyle}>
        <div style={styles.headingContainer}>
          <h2 style={styles.heading}>WHAT OUR CLIENTS SAY</h2>
        </div>
        <div className="sk-ww-google-reviews" data-embed-id="25568915"></div>
      </div>
    </section>
  );
}