import React from 'react';
import { Typography } from '@material-ui/core';

import emoji from '../../utils/emoji';

const DayForecast = ({dayWeather}) => {
  const day = new Date(dayWeather.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
  
  return (
    <div className='day'>
      <Typography variant='body2' align='center'>{day}</Typography>
      <Typography variant='h5' component='p' align='center'>{emoji[dayWeather.weather[0].icon]}</Typography>
      <Typography variant='body2' align='center'>{Math.round(dayWeather.temp.day)}&deg; {Math.round(dayWeather.temp.night)}&deg;</Typography>
    </div>
  )
}

export default DayForecast;