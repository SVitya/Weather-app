import axios from 'axios';

const fetchWeatherByCoordinates = (latitude, longitude) => axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);

const fetchWeatherByCity = (city) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);

export { fetchWeatherByCoordinates, fetchWeatherByCity };