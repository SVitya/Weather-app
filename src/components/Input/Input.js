import React, { useState } from 'react';
import {
  TextField
} from '@material-ui/core';

import { fetchCoordinates, fetchWeatherByLocation } from '../../api/api';

const Input = ({ setLocation, setWeather }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!sessionStorage.getItem(input)) {
      fetchCoordinates(input)
        .then((coordinates => fetchWeatherByLocation(coordinates.lat, coordinates.lng)))
        .then(weather => {
          setWeather(weather.data);
          sessionStorage.setItem(input, JSON.stringify(weather.data));
        })
        .then(() => setLocation(input))
    } else {
      setLocation(input);
      setWeather(JSON.parse(sessionStorage.getItem(input)));
    }

    setInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='Search'
        value={input}
        onChange={handleChange}
        fullWidth
      />
    </form>
  )
}

export default Input;