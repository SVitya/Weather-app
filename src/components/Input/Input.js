import React, { useState } from 'react';
import {
  TextField
} from '@material-ui/core';

import { fetchCoordinates, fetchWeatherByLocation } from '../../api/api';
import useStyles from './input.styles';

const Input = ({ setLocation, setWeather }) => {
  const [input, setInput] = useState('');
  const styles = useStyles();

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
        .catch(err => alert('Invalid input'));
    } else {
      setLocation(input);
      setWeather(JSON.parse(sessionStorage.getItem(input)));
    }

    setInput('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.search}>
      <TextField
        label='Search'
        value={input}
        onChange={handleChange}
      />
    </form>
  )
}

export default Input;