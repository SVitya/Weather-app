import React, { useState } from 'react';
import {
  TextField
} from '@material-ui/core';

import { fetchWeatherByCity } from '../../api/api';

const Input = ({ setLocationAndWeather, setLocation, setWeather }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!sessionStorage.getItem(input)) {
      console.log('handleSubmit')
      fetchWeatherByCity(input)
        .then((res => setLocationAndWeather(res.data)))
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