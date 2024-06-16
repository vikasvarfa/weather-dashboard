// src/components/WeatherDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';
import Favorites from './Favorites';
import ForecastDisplay from './ForecastDisplay';
import { Container, Button } from 'react-bootstrap';

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [unit, setUnit] = useState('metric'); // default to Celsius

  const API_KEY = '54e9146d839daf051c14d4a950884aa9'; // Replace with your OpenWeatherMap API key

  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await axios.get('http://localhost:5000/favorites');
      setFavorites(response.data.map(fav => fav.name));
    };

    fetchFavorites();
  }, []);

  const handleSearch = async (city) => {
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
    );
    const forecastResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
    );

    const weatherDataWithUnit = {
      ...weatherResponse.data,
      main: {
        ...weatherResponse.data.main,
        temp_unit: unit === 'metric' ? 'C' : 'F',
      },
    };
    setWeatherData(weatherDataWithUnit);
    setForecastData(forecastResponse.data);
  };

  const handleAddFavorite = async () => {
    if (weatherData && !favorites.includes(weatherData.name)) {
      const newFavorites = [...favorites, weatherData.name];
      setFavorites(newFavorites);
      await axios.post('http://localhost:5000/favorites', { name: weatherData.name });
    }
  };

  const handleRemoveFavorite = async (city) => {
    const newFavorites = favorites.filter((fav) => fav !== city);
    setFavorites(newFavorites);
    const cityToRemove = await axios.get(`http://localhost:5000/favorites?name=${city}`);
    if (cityToRemove.data.length > 0) {
      await axios.delete(`http://localhost:5000/favorites/${cityToRemove.data[0].id}`);
    }
  };

  const handleSelectFavorite = (city) => {
    handleSearch(city);
  };

  const toggleUnit = async () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(newUnit);

    // Update the current weather data with the new unit
    if (weatherData) {
      handleSearch(weatherData.name);
    }
  };

  return (
    <Container className="weather-dashboard">
      <Search onSearch={handleSearch} />
      <Button variant="secondary" onClick={toggleUnit} className="mb-3">
        Toggle to {unit === 'metric' ? 'Celsius':'Fahrenheit'}
      </Button>
      <WeatherDisplay weatherData={weatherData} />
      <ForecastDisplay forecastData={forecastData} />
      <Button variant="success" onClick={handleAddFavorite} className="mb-3">
        Add to Favorites
      </Button>
      <Favorites
        favorites={favorites}
        onRemove={handleRemoveFavorite}
        onSelect={handleSelectFavorite}
      />
    </Container>
  );
};

export default WeatherDashboard;
