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
    let city = input.toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(' ');

    if (!sessionStorage.getItem(city)) {
      fetchCoordinates(city)
        .then((coordinates => fetchWeatherByLocation(coordinates.lat, coordinates.lng)))
        .then(weather => {
          setWeather(weather.data);
          sessionStorage.setItem(city, JSON.stringify(weather.data));
        })
        .then(() => setLocation(city))
        .catch(err => alert('Invalid input'));
    } else {
      setLocation(city);
      setWeather(JSON.parse(sessionStorage.getItem(city)));
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