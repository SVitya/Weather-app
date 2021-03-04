import React, { useState, useEffect } from 'react';
import {
  CssBaseline,
  Container,
  Paper,
  Grid,
  Typography
} from '@material-ui/core';

import Input from '../Input/Input';
import { fetchWeatherByCoordinates } from '../../api/api';
import useStyles from './app.styles';

function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({});
  const styles = useStyles();

  useEffect(() => {
    if (!sessionStorage.getItem('currentLocation')) {
      navigator.geolocation.getCurrentPosition((pos) => {
        let {latitude, longitude} = pos.coords;

        console.log('useEffect')
        fetchWeatherByCoordinates(latitude, longitude)
          .then((res => {
            sessionStorage.setItem('currentLocation', res.data.name);
            setLocationAndWeather(res.data);
          }))
      });
    } else {
      setLocation(sessionStorage.getItem('currentLocation'));
      setWeather(JSON.parse(sessionStorage.getItem(sessionStorage.getItem('currentLocation'))));
    }
  }, []);
  
  const setLocationAndWeather = data => {
    sessionStorage.setItem(data.name, JSON.stringify({...data.main, ...data.weather[0]}));
    setLocation(data.name);
    setWeather({...data.main, ...data.weather[0]})
  }

  return (
    <CssBaseline>
      <Container component='main' maxWidth='xs'>
        <Paper elevation={12} className={styles.paper}>
          <Input setLocationAndWeather={setLocationAndWeather} setLocation={setLocation} setWeather={setWeather} />
          <Grid item>
            <Typography>
              {location}
            </Typography>
            <Typography>
              {weather.temp}
            </Typography>
          </Grid>
        </Paper> 
      </Container>
    </CssBaseline>
  );
}

export default App;