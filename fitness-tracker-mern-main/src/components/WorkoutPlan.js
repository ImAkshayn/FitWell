import React, { useState } from 'react';
import chestImg from '../assets/chest.jpg';
import legsImg from '../assets/legs.jpg';
import backImg from '../assets/back.jpg';
import armsImg from '../assets/arms.jpg';
import shouldersImg from '../assets/shoulders.jpg';
import coreImg from '../assets/core.jpg';

const WorkoutPlan = () => {
  const [chestReps, setChestReps] = useState('');
  const [chestSets, setChestSets] = useState('');
  const [legsReps, setLegsReps] = useState('');
  const [legsSets, setLegsSets] = useState('');
  const [backReps, setBackReps] = useState('');
  const [backSets, setBackSets] = useState('');
  const [armsReps, setArmsReps] = useState('');
  const [armsSets, setArmsSets] = useState('');
  const [shouldersReps, setShouldersReps] = useState('');
  const [shouldersSets, setShouldersSets] = useState('');
  const [coreReps, setCoreReps] = useState('');
  const [coreSets, setCoreSets] = useState('');

  const [chestCalories, setChestCalories] = useState(null);
  const [legsCalories, setLegsCalories] = useState(null);
  const [backCalories, setBackCalories] = useState(null);
  const [armsCalories, setArmsCalories] = useState(null);
  const [shouldersCalories, setShouldersCalories] = useState(null);
  const [coreCalories, setCoreCalories] = useState(null);

  const handleClick = (bodyPart) => {
    let reps, sets, result;

    switch (bodyPart) {
      case 'Chest':
        reps = parseInt(chestReps);
        sets = parseInt(chestSets);
        if (!isNaN(reps) && !isNaN(sets)) {
          result = reps * sets * 0.5;
          setChestCalories(result);
        } else {
          setChestCalories('Please enter valid numbers');
        }
        break;
      case 'Legs':
        reps = parseInt(legsReps);
        sets = parseInt(legsSets);
        if (!isNaN(reps) && !isNaN(sets)) {
          result = reps * sets * 0.5;
          setLegsCalories(result);
        } else {
          setLegsCalories('Please enter valid numbers');
        }
        break;
      case 'Back':
        reps = parseInt(backReps);
        sets = parseInt(backSets);
        if (!isNaN(reps) && !isNaN(sets)) {
          result = reps * sets * 0.5;
          setBackCalories(result);
        } else {
          setBackCalories('Please enter valid numbers');
        }
        break;
      case 'Arms':
        reps = parseInt(armsReps);
        sets = parseInt(armsSets);
        if (!isNaN(reps) && !isNaN(sets)) {
          result = reps * sets * 0.5;
          setArmsCalories(result);
        } else {
          setArmsCalories('Please enter valid numbers');
        }
        break;
      case 'Shoulders':
        reps = parseInt(shouldersReps);
        sets = parseInt(shouldersSets);
        if (!isNaN(reps) && !isNaN(sets)) {
          result = reps * sets * 0.5;
          setShouldersCalories(result);
        } else {
          setShouldersCalories('Please enter valid numbers');
        }
        break;
      case 'Core':
        reps = parseInt(coreReps);
        sets = parseInt(coreSets);
        if (!isNaN(reps) && !isNaN(sets)) {
          result = reps * sets * 0.5;
          setCoreCalories(result);
        } else {
          setCoreCalories('Please enter valid numbers');
        }
        break;
      default:
        break;
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🏋️‍♂️ Workout Plan</h1>
      <div style={styles.grid}>
        {renderCard('Chest', chestImg, chestReps, setChestReps, chestSets, setChestSets, chestCalories, () => handleClick('Chest'))}
        {renderCard('Legs', legsImg, legsReps, setLegsReps, legsSets, setLegsSets, legsCalories, () => handleClick('Legs'))}
        {renderCard('Back', backImg, backReps, setBackReps, backSets, setBackSets, backCalories, () => handleClick('Back'))}
        {renderCard('Arms', armsImg, armsReps, setArmsReps, armsSets, setArmsSets, armsCalories, () => handleClick('Arms'))}
        {renderCard('Shoulders', shouldersImg, shouldersReps, setShouldersReps, shouldersSets, setShouldersSets, shouldersCalories, () => handleClick('Shoulders'))}
        {renderCard('Core', coreImg, coreReps, setCoreReps, coreSets, setCoreSets, coreCalories, () => handleClick('Core'))}
      </div>
    </div>
  );
};

const renderCard = (title, imgSrc, reps, setReps, sets, setSets, calories, handleClick) => (
  <div style={styles.card}>
    <h3 style={styles.cardHeading}>{title}</h3>
    <img src={imgSrc} alt={title} style={styles.image} />
    <input
      type="number"
      placeholder="Enter reps"
      value={reps}
      onChange={(e) => setReps(e.target.value)}
      style={styles.input}
    />
    <input
      type="number"
      placeholder="Enter sets"
      value={sets}
      onChange={(e) => setSets(e.target.value)}
      style={styles.input}
    />
    <button style={styles.categoryButton} onClick={handleClick}>
      {title}
    </button>
    {calories !== null && (
      <p style={styles.resultText}>Calories Burned: {calories}</p>
    )}
  </div>
);

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '32px',
    color: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '24px',
  },
  card: {
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardHeading: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  },
  image: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '12px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  },
  input: {
    width: '85%',
    padding: '10px',
    margin: '8px 0',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  categoryButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '6px',
    marginTop: '10px',
    fontSize: '15px',
  },
  resultText: {
    marginTop: '10px',
    fontWeight: 'bold',
    fontSize: '16px',
  },
};

export default WorkoutPlan;
