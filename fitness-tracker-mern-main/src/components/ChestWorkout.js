import React, { useState } from 'react';

const ChestWorkout = () => {
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [calories, setCalories] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const rep = parseInt(reps);
    const set = parseInt(sets);
    if (!isNaN(rep) && !isNaN(set)) {
      const totalCalories = rep * set * 0.5;
      setCalories(totalCalories);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Segoe UI' }}>
      <h2>Chest Workout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Reps:</label>
          <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} required />
        </div>
        <div>
          <label>Sets:</label>
          <input type="number" value={sets} onChange={(e) => setSets(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {calories !== null && (
        <div>
          <h3>Activity Summary</h3>
          <p>Total Calories Burned: {calories.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default ChestWorkout;
