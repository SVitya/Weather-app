import React, { useState, useEffect } from 'react';
import {
  CssBaseline,
  Container,
  Paper,
  Typography
} from '@material-ui/core';

import Input from '../Input/Input';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import WeekForecast from '../WeekForecast/WeekForecast';

import { fetchLocation, fetchWeatherByLocation } from '../../api/api';
import useStyles from './app.styles';

function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({});
  const styles = useStyles();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      let {latitude, longitude} = pos.coords;

      if (!sessionStorage.getItem('currentLocation')) {
        fetchLocation(latitude, longitude)
          .then(res => {
            setLocation(res);
            sessionStorage.setItem('currentLocation', res);
          })
          .catch(err => console.log(err))
      } else {
        setLocation(sessionStorage.getItem('currentLocation'));
      }

      if (!sessionStorage.getItem('currentLocationWeather')) {
        fetchWeatherByLocation(latitude, longitude)
          .then(weather => {
            setWeather(weather.data);
            sessionStorage.setItem('currentLocationWeather', JSON.stringify(weather.data));
          })
          .catch(err => console.log(err))
      } else {
        setWeather(JSON.parse(sessionStorage.getItem('currentLocationWeather')));
      }
    });
  }, []);

  return (
    <CssBaseline>
      <Container component='main' maxWidth='md'>
        <Paper elevation={12} className={styles.paper}>
          <Input setLocation={setLocation} setWeather={setWeather} />
          <Typography align='center' variant='h5' component='h1' className={styles.city}>{location !== '' ? location : 'Turn on geolocation and reload page or type the city'}</Typography>
          <CurrentWeather currentWeather={weather.current} />
          <WeekForecast forecast={weather.daily} />
        </Paper> 
      </Container>
    </CssBaseline>
  );
}

export default App;