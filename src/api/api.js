import axios from 'axios';

const fetchLocation = (latitude, longitude) => axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&language=en&result_type=locality&key=${process.env.REACT_APP_GEOCODE_API_KEY}`)
  .then(res => res.data.results[0].address_components[0].long_name);
  
const fetchCoordinates = (location) => axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&language=en&key=${process.env.REACT_APP_GEOCODE_API_KEY}`)
  .then(res => ({city: res.data.results[0].address_components[0].long_name, location: {...res.data.results[0].geometry.location}}));

const fetchWeatherByCoordinates = (latitude, longitude) => axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)

export { fetchLocation, fetchCoordinates, fetchWeatherByCoordinates };