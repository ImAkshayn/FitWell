import React from 'react';
import bgImage from '../assets/bg2.jpeg';

const About = () => {
  return (
    <div style={styles.aboutContainer}>
      <div style={styles.blurBackground}></div>
      <div style={styles.content}>
        <h2 style={styles.header}>About</h2>
        <p style={styles.paragraph}>
          We believe that fitness is a journey, not a destination. That's why we created <span style={styles.fit}>Fit</span><span style={styles.well}>Well</span> - a website and companion app designed to empower you on your path to a healthier, happier you. We offer innovative fitness trackers with a focus on <span style={styles.feature}>personalized data insights, a supportive community, and a sleek design</span>. We're here to help you set goals, track progress, and celebrate every victory, one step at a time. Join us and let's move forward, together!
        </p>
      </div>
    </div>
  );
};

const styles = {
  aboutContainer: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  blurBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(8px)',
    zIndex: -1,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: '#142d4c', // Changed background color to dark blue
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    textAlign: 'center',
  },
  header: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#fff', // Header text color set to white
    marginBottom: '20px',
    fontFamily: 'serif',
  },
  paragraph: {
    fontSize: '18px',
    color: '#fff', // Text color set to white
    lineHeight: '1.6',
  },
  fit: {
    color: '#fff', // Fit text color set to white
    fontWeight: 'bold',
  },
  well: {
    color: '#64b5f6',
    fontWeight: 'bold',
  },
  feature: {
    color: '#fff', // Feature text color set to white
    fontWeight: 'bold',
  },
};

export default About;
