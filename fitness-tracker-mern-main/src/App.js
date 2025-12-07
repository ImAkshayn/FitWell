import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Dashboard from './components/Dashboard';
import WorkoutPlan from './components/WorkoutPlan';
import ChestWorkout from './components/ChestWorkout'; // ✅ New import

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WorkoutPlan" element={<WorkoutPlan />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Chest" element={<ChestWorkout />} /> {/* ✅ New route added */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
