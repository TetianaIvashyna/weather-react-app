import axios from 'axios';
import { toast } from 'react-toastify';
import { apiKey } from "../commons/constants/constants";
import makeDate  from "../commons/makeDate/makeDate";


export const handlePosition = (setWeather, handlePositionError) => (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
  axios
    .get(apiUrl)
    .then((response) => handleResponse(response, setWeather))
    .catch(handlePositionError);
};

export const handleResponse = (response, setWeather, setInputText) => {
  if (response.data.message === 'City not found') {
    toast.error('Can not find this city. Please, check the spelling');
    setWeather({
      city: '',
      message: 'Please, choose a location',
      ready: false,
    });
  } else {
    setWeather({
      city: response.data.city,
      message: response.data.city,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
      dateTime: makeDate(response.data.time),
      feelslike: response.data.temperature.feels_like,
      pressure: response.data.temperature.pressure,
      temperature: response.data.temperature.current,
      windspeed: response.data.wind.speed,
      winddirection: response.data.wind.degree,
      humidity: response.data.temperature.humidity,
      ready: true,
    });
    setInputText('');
  }
};
