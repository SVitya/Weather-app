import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

function App() {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      let {latitude, longitude} = pos.coords;
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GEOCODE_API_KEY}&language=uk&result_type=locality`)
        .then(res => setLocation({
          name: res.data.results[0].address_components[0].long_name,
          lat: latitude,
          lon: longitude
        }))
    });  
  }, []);

  useEffect(() => {
    if (Object.keys(location).length === 0) {
      return;
    }

    if (!sessionStorage.getItem(location.name)) {
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
        .then(res => setWeather(res.data))
    } else {
      setWeather(JSON.parse(sessionStorage.getItem([location.name])));
    }
  }, [location]);

  useEffect(() => {
    sessionStorage.setItem([location.name], JSON.stringify(weather));
  }, [weather])

  return (
    <div>
      {location.name}
    </div>
  );
}

export default App;