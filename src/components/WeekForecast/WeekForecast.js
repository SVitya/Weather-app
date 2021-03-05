import React from 'react';

import DayForecast from '../DayForecast/DayForecast';
import './week_forecast.css';

const WeekForecast = ({forecast}) => {

  return (
    <div className='container'>
      {forecast !== undefined && forecast.map(day => <DayForecast key={day.dt} dayWeather={day} />)}
    </div>
  )
}

export default WeekForecast;