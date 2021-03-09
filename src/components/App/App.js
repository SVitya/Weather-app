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

import { fetchLocation, fetchWeatherByCoordinates } from '../../api/api';
import useStyles from './app.styles';

function App() {
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState({});
  const [weather, setWeather] = useState({});
  const styles = useStyles();

  useEffect(() => {
    if (!localStorage.getItem('lastLocation')) {
      navigator.geolocation.getCurrentPosition((pos) => {
        let { latitude, longitude } = pos.coords;
  
        fetchLocation(latitude, longitude)
          .then(locationName => {
            setLocation(locationName);
            setCoordinates({ latitude, longitude });
          })
          .catch (() => console.log(`Can't get location`))
      });
    } else {
      let { locationName, latitude, longitude } = JSON.parse(localStorage.getItem('lastLocation'));
      setLocation(locationName);
      setCoordinates({ latitude, longitude });
    }
  }, []);

  useEffect(() => {
    location !== '' && localStorage.setItem('lastLocation', JSON.stringify({
      locationName: location,
      latitude: coordinates.latitude,
      longitude: coordinates.longitude
    }));
  }, [location, coordinates]);

  useEffect(() => {
    if (Object.keys(coordinates).length !== 0) {
      if (!sessionStorage.getItem(location)) {
        let { latitude, longitude } = JSON.parse(localStorage.getItem('lastLocation'));

        fetchWeatherByCoordinates(latitude, longitude)
          .then(weather => {
            setWeather(weather.data);
            sessionStorage.setItem(location, JSON.stringify(weather.data));
          })
          .catch(() => alert(`Can't fetch weather data`))
      } else {
        setWeather(JSON.parse(sessionStorage.getItem(location)));
      }
    }
  }, [coordinates]);

  return (
    <CssBaseline>
      <Container component='main' maxWidth='md'>
        <Paper elevation={12} className={styles.paper}>
          <Input setLocation={setLocation} setWeather={setWeather} setCoordinates={setCoordinates} />
          <Typography align='center' variant='h5' className={styles.city}>{location !== '' ? location : 'Turn on geolocation or type the city'}</Typography>
          <CurrentWeather currentWeather={weather.current} />
          <WeekForecast forecast={weather.daily} />
        </Paper> 
      </Container>
    </CssBaseline>
  );
}

export default App;