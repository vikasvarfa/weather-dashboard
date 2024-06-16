// src/App.js
import React from 'react';
import WeatherDashboard from './components/WeatherDashboard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <WeatherDashboard />
    </div>
  );
};

export default App;
