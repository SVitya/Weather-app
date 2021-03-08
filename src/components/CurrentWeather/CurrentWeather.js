import React from 'react';
import { 
  Grid,
  Typography
} from '@material-ui/core';

import useStyles from './current_weather.styles';
import emoji from '../../utils/emoji';

const CurrentWeather = ({currentWeather}) => {
  const styles = useStyles();

  return (
    currentWeather !== undefined &&
      <Grid container className={styles.container}>
        <Grid item xs={12} sm={12}>
          <Typography align='center' variant='h3' component='h2'>{`${emoji[currentWeather.weather[0].icon]} ${currentWeather.weather[0].main}`}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.general}>
          <Typography align='right' variant='h1' component='h3' className={styles.temp}>{Math.round(currentWeather.temp)}&deg;</Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.details}>
          <Typography variant='body1'>Feels like: {Math.round(currentWeather.feels_like)}&deg;</Typography>
          <Typography variant='body1'>Humidity: {currentWeather.humidity}%</Typography>
          <Typography variant='body1'>Pressure: {currentWeather.pressure}hPa</Typography>
        </Grid>
      </Grid>
  )
}

export default CurrentWeather;