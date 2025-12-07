import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import walkingImg from '../assets/walking.png';
import runningImg from '../assets/running.png';
import swimmingImg from '../assets/swimming.png';
import meditationImg from '../assets/meditation.png';

const Dashboard = () => {
  const [activities, setActivities] = useState({
    walking: null,
    running: null,
    swimming: null,
    meditation: null,
  });

  const navigate = useNavigate();

  const handleWalking = (e) => {
    e.preventDefault();
    const distance = parseFloat(e.target.distance.value);
    const calories = distance * 50;
    setActivities((prev) => ({
      ...prev,
      walking: { distance, calories, quote: 'Amazing job today!' },
    }));
  };

  const handleRunning = (e) => {
    e.preventDefault();
    const distance = parseFloat(e.target.distance.value);
    const calories = distance * 100;
    setActivities((prev) => ({
      ...prev,
      running: { distance, calories, quote: 'Keep up the momentum!' },
    }));
  };

  const handleSwimming = (e) => {
    e.preventDefault();
    const duration = parseFloat(e.target.duration.value);
    const calories = duration * 7;
    setActivities((prev) => ({
      ...prev,
      swimming: { duration, calories, quote: 'You’re flowing great!' },
    }));
  };

  const handleMeditation = (e) => {
    e.preventDefault();
    const duration = parseFloat(e.target.duration.value);
    const calories = duration * 1;
    setActivities((prev) => ({
      ...prev,
      meditation: { duration, calories, quote: 'Peaceful mind, strong body!' },
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const renderSummary = () => {
    const rows = [];
    for (const activity in activities) {
      if (activities[activity]) {
        rows.push(
          <tr key={activity}>
            <td style={styles.td}>{activity.charAt(0).toUpperCase() + activity.slice(1)}</td>
            <td style={styles.td}>
              {activities[activity].distance
                ? `${activities[activity].distance} km`
                : `${activities[activity].duration} min`}
            </td>
            <td style={styles.td}>{activities[activity].calories} calories</td>
            <td style={styles.td}>{activities[activity].quote}</td>
          </tr>
        );
      }
    }
    return rows;
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>FITNESS TRACKER</h1>
        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
      </div>
      <p style={styles.subtitle}>Track your activities and stay motivated!</p>

      <div style={styles.formsGrid}>
        <ActivityForm
          name="Walking"
          id="walkingDistance"
          label="Distance (km)"
          onSubmit={handleWalking}
          image={walkingImg}
          alt="Walking"
        />
        <ActivityForm
          name="Running"
          id="runningDistance"
          label="Distance (km)"
          onSubmit={handleRunning}
          image={runningImg}
          alt="Running"
        />
        <ActivityForm
          name="Swimming"
          id="swimmingDuration"
          label="Duration (min)"
          onSubmit={handleSwimming}
          image={swimmingImg}
          alt="Swimming"
        />
        <ActivityForm
          name="Meditation"
          id="meditationDuration"
          label="Duration (min)"
          onSubmit={handleMeditation}
          image={meditationImg}
          alt="Meditation"
        />
      </div>

      <h2 style={styles.summaryTitle}>📊 Activity Summary</h2>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Activity</th>
              <th style={styles.th}>Detail</th>
              <th style={styles.th}>Calories</th>
              <th style={styles.th}>Quote</th>
            </tr>
          </thead>
          <tbody>{renderSummary()}</tbody>
        </table>
      </div>
    </div>
  );
};

const ActivityForm = ({ name, id, label, onSubmit, image, alt }) => (
  <form style={styles.formCard} onSubmit={onSubmit}>
    <h3 style={styles.formTitle}>{name}</h3>
    <div style={styles.imageWrapper}>
      <img src={image} alt={alt} style={styles.activityImage} />
    </div>
    <div style={styles.inputGroup}>
      <label htmlFor={id} style={styles.label}>{label}</label>
      <input
        type="number"
        id={id}
        name={label.toLowerCase().includes('distance') ? 'distance' : 'duration'}
        required
        step="0.01"
        style={styles.input}
      />
    </div>
    <button type="submit" style={styles.submitButton}>
      Submit
    </button>
  </form>
);

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '30px',
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: '#f4f8fb',
    borderRadius: '12px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  title: {
    fontSize: '36px',
    color: '#2c3e50',
    textAlign: 'center',
    flex: 1,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#555',
    marginBottom: '30px',
  },
  formsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  },
  formCard: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.2s ease',
    textAlign: 'center',
  },
  formTitle: {
    fontSize: '22px',
    marginBottom: '15px',
    color: '#34495e',
  },
  imageWrapper: {
    width: '100%',
    height: '200px', 
    marginBottom: '10px',
  },
  activityImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  inputGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: '500',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
  },
  submitButton: {
    backgroundColor: '#2ecc71',
    color: 'white',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  summaryTitle: {
    fontSize: '28px',
    marginTop: '20px',
    marginBottom: '15px',
    color: '#2c3e50',
    textAlign: 'center',
  },
  tableWrapper: {
    overflowX: 'auto',
    marginBottom: '40px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    textAlign: 'center',
  },
  th: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '12px',
    fontSize: '16px',
  },
  td: {
    padding: '12px',
    fontSize: '15px',
    borderTop: '1px solid #ddd',
  },
};

export default Dashboard;
