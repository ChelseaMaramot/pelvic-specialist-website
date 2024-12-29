import React from "react";

import incontinenceImage from "../Assets/incontinenceImage.jpg";
import prolapseImage from "../Assets/prolapseImage.png";
import diastasisImage from "../Assets/diastisImage.png";
import backPainImage from "../Assets/backPainImage.jpg";


const containerStyles = {
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  alignItems: 'center', 
  margin: '50px auto',    
}

const descContainer = {
  textAlign: 'left',
  letterSpacing: '0.7px',
  lineHeight: '20px'
};

const listStyle = {
  marginTop: '0.5rem',
  listStyleType: 'none',
};

const typeNameStyle = {
  color: '#8447E9',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '0.8em',
  marginRight: '0.5rem',
  fontWeight: '600'
};

const typeDescriptionStyle = {
  color: '#000000',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: '500',
  fontSize: '0.8em',
};

const titleStyle = {
  fontSize: '1.3rem',
  fontWeight: '400',
  color: '#8447E9',
};

const descriptionStyle = {
  marginTop: '0.5rem',
  fontSize: '0.8em',
  fontWeight: '500',
};

const imageSize = {
  width: '25em',
  height: '25em',
  margin: '2.5em',
  objectFit: 'cover'
};

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2em',
};

const conditionsData = [
  {
    image: incontinenceImage,
    title: "Incontinence",
    description:
      "Urinary incontinence is leakage of urine that you cannot control due to dysfunction of pelvic floor muscles. There are different types of urinary incontinence:",
    types: [
      {
        name: "Stress incontinence",
        description:
          "Occurs when you sneeze, cough, laugh, jog, or do other things that put pressure on your bladder.",
      },
      {
        name: "Urge incontinence",
        description:
          "Occurs when you lose control of your bladder after experiencing a sudden and strong urge to urinate. Once that urge hits, you may not be able to make it to the bathroom in time.",
      },
      {
        name: "Mixed incontinence",
        description: "When there is both stress and urge incontinence.",
      },
      {
        name: "Overflow incontinence",
        description:
          "Happens when you don’t completely empty your bladder. Later, some of the remaining urine may leak from your bladder. This type of incontinence is sometimes called 'dribbling'.",
      },
    ],
  },
  {
    image: prolapseImage,
    title: "Pelvic Organ Prolapse",
    description:
      "Pelvic organ prolapse refers to the prolapse or drooping of any of the pelvic floor organs, including the bladder, uterus, vagina, and rectum. A prolapse happens when the pelvis muscles and tissues can no longer support these organs because the muscles and tissues are weak or tight.",
  },
  {
    title: "Vaginismus",
    description:
      "Vaginismus is a condition whereby the muscles of the vaginal wall go into spasm and greatly reduce the size of the vaginal opening. Symptoms often include significant chronic pain during intercourse, insertion of a tampon, or use of vaginal suppositories.",
  },
  {
    image: diastasisImage,
    title: "Diastasis Rectus Abdominis",
    description:
      "Pregnancy puts so much pressure on the belly that sometimes the muscles in front can’t keep their shape. 'Diastasis' means separation. 'Recti' refers to your abdominal muscles called the 'rectus abdominis'. Diastasis recti abdominis is a separation of the rectus abdominal muscles at the linea alba (a fibrous structure that runs down the midline of the abdomen). Diastasis recti abdominis can occur with postmenopausal women, and in women during pregnancy.",
  },
  {
    image: backPainImage,
    title: "Pregnancy-Related Hip and Lower Back Pain",
    description:
      "When you are pregnant, you may get aches and pains in your hips and pelvic area or lower back. This is a normal sign that your pelvic area is preparing for childbirth. It is possible that due to pregnancy hormones there will be an increase in mobility of joints and laxidity of ligaments which will cause those pains during or after pregnancy.",
  },
];

export default function ConditionsContent() {
  return (
    <div style={containerStyles}>
      {conditionsData.map((condition, index) => (
        <div key={index} style={{ ...flexContainer, flexDirection: index % 2 === 0 ? 'row-reverse' : 'row' }}>
          {condition.image && (
            <img
              src={condition.image}
              alt={condition.title}
              style={imageSize}
            />
          )}
          <div style={descContainer}>
            <h2 style={titleStyle}>{condition.title}</h2>
            <p style={descriptionStyle}>{condition.description}</p>
            {condition.types && (
              <div style={listStyle}>
                {condition.types.map((type, idx) => (
                  <li key={idx}>
                    <p>
                      <span style={typeNameStyle}>{type.name}:</span>
                      <span style={typeDescriptionStyle}>{type.description}</span>
                    </p>
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
