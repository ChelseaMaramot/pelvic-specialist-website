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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
    script.defer = true;
    document.body.appendChild(script);

    const observer = new MutationObserver(() => {
      const widget = document.querySelector(".sk-ww-google-reviews");
      if (widget && widget.querySelector(".sk-review")) {
        setHasReviews(true);
      }
    });

    const widget = document.querySelector(".sk-ww-google-reviews");
    if (widget) {
      observer.observe(widget, { childList: true, subtree: true });
    }

    return () => {
      document.body.removeChild(script);
      observer.disconnect();
    };
  }, []);

  if (!hasReviews) return null;

  return (
    <section className="google-reviews-section" style={styles.containerStyles}>
      <div style={styles.subContainerStyle}>
        <div style={styles.headingContainer}>
          <h2 style={styles.heading}>WHAT OUR PATIENTS SAY</h2>
        </div>
        <div className="sk-ww-google-reviews" data-embed-id="25568915"></div>
      </div>
    </section>
  );
}