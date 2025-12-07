import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/bg1.jpeg';

const Home = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/Dashboard');
  };

  const handleSignup = (event) => {
    event.preventDefault();
    navigate('/Dashboard');
  };

  return (
    <div style={styles.homeContainer}>
      <div style={styles.blurBackground}></div>
      <div style={styles.content}>
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Fit<span style={styles.headerSubtitle}>Well</span></h1>
          <p style={styles.headerSubtext}>Start your fitness journey here</p>
        </div>
        <div style={styles.formContainer}>
          <h2>{isLoginForm ? 'Login' : 'Signup'}</h2>
          {isLoginForm ? (
            <form style={styles.form} onSubmit={handleLogin}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="username">Username</label>
                <input style={styles.input} type="text" id="username" name="username" required />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="password">Password</label>
                <input style={styles.input} type="password" id="password" name="password" required />
              </div>
              <button style={styles.button} type="submit">Login</button>
            </form>
          ) : (
            <form style={styles.form} onSubmit={handleSignup}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="email">Email</label>
                <input style={styles.input} type="email" id="email" name="email" required />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="newUsername">Username</label>
                <input style={styles.input} type="text" id="newUsername" name="newUsername" required />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="newPassword">Password</label>
                <input style={styles.input} type="password" id="newPassword" name="newPassword" required />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="weight">Weight (kg)</label>
                <input style={styles.input} type="number" id="weight" name="weight" required />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="height">Height (cm)</label>
                <input style={styles.input} type="number" id="height" name="height" required />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="gender">Gender</label>
                <select style={styles.input} id="gender" name="gender" required>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button style={styles.button} type="submit">Signup</button>
            </form>
          )}
          <button style={styles.toggleButton} onClick={toggleForm}>
            {isLoginForm ? 'Need to signup?' : 'Already have an account?'}
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  homeContainer: {
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
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '300px',
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  headerTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#142d4c',
    fontFamily: 'serif',
  },
  headerSubtitle: {
    color: '#64b5f6',
  },
  headerSubtext: {
    fontSize: '18px',
    color: '#666',
    marginTop: '10px',
  },
  formContainer: {
    marginTop: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#142d4c',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#142d4c',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
  toggleButton: {
    backgroundColor: 'transparent',
    color: '#142d4c',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    textDecoration: 'underline',
    marginTop: '10px',
  },
};

export default Home;
