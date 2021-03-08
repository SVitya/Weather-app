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
    if (!sessionStorage.getItem('currentLocation')) {
      navigator.geolocation.getCurrentPosition((pos) => {
        let {latitude, longitude} = pos.coords;

        fetchLocation(latitude, longitude)
          .then(cityName => {
            setLocation(cityName);
            sessionStorage.setItem('currentLocation', cityName);
            return cityName;
          })
          .then(cityName => {
            if (!sessionStorage.getItem(cityName)) {
              fetchWeatherByLocation(latitude, longitude)
                .then(weather => {
                  setWeather(weather.data);
                  sessionStorage.setItem(cityName, JSON.stringify(weather.data));
                })
                .catch(() => alert(`Can't fetch weather data`))
            } else {
              setWeather(JSON.parse(sessionStorage.getItem(cityName)));
            }
          })
          .catch(() => alert('Something went wrong'));
      });
    } else {
      setLocation(sessionStorage.getItem('currentLocation'));
      setWeather(JSON.parse(sessionStorage.getItem(sessionStorage.getItem('currentLocation'))));
    }
  }, []);

  return (
    <CssBaseline>
      <Container component='main' maxWidth='md'>
        <Paper elevation={12} className={styles.paper}>
          <Input setLocation={setLocation} setWeather={setWeather} />
          <Typography align='center' variant='h5' className={styles.city}>{location !== '' ? location : 'Turn on geolocation or type the city'}</Typography>
          <CurrentWeather currentWeather={weather.current} />
          <WeekForecast forecast={weather.daily} />
        </Paper> 
      </Container>
    </CssBaseline>
  );
}

export default App;