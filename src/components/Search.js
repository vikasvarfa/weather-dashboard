// src/components/Search.js
import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Search = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
    setCity('');
  };

  return (
    <div className="search mb-3">
      <InputGroup>
        <FormControl
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default Search;
