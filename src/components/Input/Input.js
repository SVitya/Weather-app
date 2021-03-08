import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import PlacesAutocomplete from 'react-places-autocomplete';

import { fetchCoordinates, fetchWeatherByLocation } from '../../api/api';
import useStyles from './input.styles';

const Input = ({ setLocation, setWeather }) => {
  const [input, setInput] = useState('');
  const styles = useStyles();

  const handleChange = (input) => {
    setInput(input);
  }

  const handleSelect = (input) => {
    let upperCaseInput = input
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(' ');

    if (!sessionStorage.getItem(upperCaseInput)) {
      fetchCoordinates(input)
        .then(({ city, location }) => {

          if(!sessionStorage.getItem(city)) {
            fetchWeatherByLocation(location.lat, location.lng)
              .then(weather => {
                setWeather(weather.data);
                sessionStorage.setItem(city, JSON.stringify(weather.data));
              })
              .then(() => setLocation(city))
              .catch(() => alert(`Can't fetch weather data`));
          } else {
            setLocation(city)
            setWeather(JSON.parse(sessionStorage.getItem(city)));
          }

        })
        .catch(() => alert('Invalid input'));
        
    } else {
      setLocation(upperCaseInput);
      setWeather(JSON.parse(sessionStorage.getItem(upperCaseInput)));
    }

    setInput('');
  }

  return (
    <PlacesAutocomplete
      value={input}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className={styles.search}>
          <TextField fullWidth
            {...getInputProps({
              placeholder: 'Search',
              className: 'location-search-input',
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default Input;