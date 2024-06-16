// src/components/WeatherDisplay.js
import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return <div>Search for a city to see the weather</div>;

  const { name, main, weather, wind } = weatherData;
  const tempUnit = main.temp_unit;

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {weather[0].description} <br />
          Temperature: {main.temp}°{tempUnit} <br />
          Humidity: {main.humidity}% <br />
          Wind Speed: {wind.speed} {tempUnit === 'C' ? 'm/s' : 'mph'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherDisplay;
