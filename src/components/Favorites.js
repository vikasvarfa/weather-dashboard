// src/components/Favorites.js
import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const Favorites = ({ favorites, onRemove, onSelect }) => {
  return (
    <div className="favorites">
      <h3>Favorites</h3>
      <ListGroup>
        {favorites.map((city) => (
          <ListGroup.Item key={city} className="d-flex justify-content-between align-items-center">
            {city}
            <div>
              <Button variant="info" size="sm" className="me-2" onClick={() => onSelect(city)}>View</Button>
              <Button variant="danger" size="sm" onClick={() => onRemove(city)}>Remove</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Favorites;
