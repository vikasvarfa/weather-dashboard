// src/components/ForecastDisplay.js
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const ForecastDisplay = ({ forecastData }) => {
  if (!forecastData) return null;

  const forecastList = forecastData.list.filter((reading) =>
    reading.dt_txt.includes("12:00:00")
  );

  return (
    <div className="forecast-display">
      <h2>5-Day Forecast</h2>
      <Row>
        {forecastList.map((forecast, index) => (
          <Col key={index} sm={6} md={4} lg={2}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{new Date(forecast.dt * 1000).toLocaleDateString()}</Card.Title>
                <Card.Text>
                  {forecast.weather[0].description} <br />
                  Temp: {forecast.main.temp}°{forecastData.city.temp_unit}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ForecastDisplay;
