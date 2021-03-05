import React from 'react';
import { Typography} from '@material-ui/core';

import useStyles from './current_weather.styles';

const CurrentWeather = ({currentWeather}) => {
  const styles = useStyles();

  return (
    currentWeather === undefined ?
      <Typography align='center' variant='h5'>Loading...</Typography>
    :
      <>
        <Typography align='center' variant='h3'>{currentWeather.weather[0].main}</Typography>
        <Typography align='center' variant='h1' className={styles.temp}>{Math.round(currentWeather.temp)}&deg;</Typography>
        <Typography variant='h6'>Feels like: {Math.round(currentWeather.feels_like)}&deg;</Typography>
        <Typography variant='h6'>Humidity: {currentWeather.humidity}%</Typography>
        <Typography variant='h6'>Pressure: {currentWeather.pressure}hPa</Typography>
      </>
  )
}

export default CurrentWeather;