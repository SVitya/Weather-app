import React, { useState } from 'react';
import {
  Grid,
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
    <Grid container spacing={2}>
      <Grid item>
        <form onSubmit={handleSubmit}>
          <TextField
            label='City'
            value={input}
            onChange={handleChange}
            fullWidth
          />
        </form>
      </Grid>
    </Grid>
  )
}

export default Input;