import axios from 'axios';
import { apiKey } from "../commons/constants/constants";

export const fetchData = (city, setWeather, handleResponse, handleAxiosError, setInputText) => {
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios
    .get(apiUrl)
    .then((response) => handleResponse(response, setWeather, setInputText))
    .catch((error) => {
      setWeather({
        city: '',
        message: 'Please, choose a location',
        ready: false,
      });
      handleAxiosError(error);
    });
};