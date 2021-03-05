import React from 'react';

import './day_forecast.css';

const DayForecast = ({dayWeather}) => {
  const day = new Date(dayWeather.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
  
  return (
    <div className='day'>
      <div>{day}</div>
      <div>{Math.round(dayWeather.temp.day)}&deg;</div>
      <div>{Math.round(dayWeather.temp.night)}&deg;</div>
    </div>
  )
}

export default DayForecast;